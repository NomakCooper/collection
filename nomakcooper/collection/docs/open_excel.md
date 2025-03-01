# open_excel Module

The **open_excel** module allows you to read from and update Excel (.xlsx) files using the [openpyxl](https://openpyxl.readthedocs.io/) Python library. It supports various operations on Excel workbooks such as reading an entire workbook (or a specific worksheet), writing updates to cells, appending new rows, or inserting rows with custom cell styling. This module supports only `.xlsx` and `.xlsm` files.

> **Note:** This module requires the `openpyxl` Python library to be installed.

---

## Table of Contents

- [Requirements](#requirements)
- [Module Description](#module-description)
- [Options](#options)
- [Return Values](#return-values)
- [Examples](#examples)
- [Usage Notes](#usage-notes)
- [License](#license)

---

## Requirements

- **Python:** The module uses Python and the [openpyxl](https://pypi.org/project/openpyxl/) library.
- **Library:** `openpyxl` must be installed (e.g., via `pip install openpyxl`).

---

## Module Description

The **open_excel** module provides the ability to read or modify Excel files. It can:

- **Read:** Extract data from one or more worksheets. When reading, you can choose to use the header row as keys (dictionary keys) or use default column names (`col_1`, `col_2`, etc.).
- **Write (Update):** Overwrite cell values in an existing worksheet.
- **Append:** Add a new row at the end of a worksheet.
- **Insert:** Insert a new row above a specified row.

Custom cell styles can be applied (font color, background color, bold, italic, underline) during write, append, or insert operations.

The source Excel file remains unmodified unless the destination (`dest`) is set to the same path as the source (`src`).

---

## Options

| Option            | Type                             | Required | Default | Description |
|-------------------|----------------------------------|----------|---------|-------------|
| **src**           | `str`                            | Yes      |         | Path to the source Excel file. |
| **dest**          | `str`                            | No       | *(None)*| Destination file path for updated Excel content. If omitted, defaults to appending `_updated.xlsx` to the `src` filename. |
| **op**            | `str`                            | Yes      |         | The operation to perform on the Excel file. Options: <br><br>**V(r)** - Read-only. Returns the content from the specified sheet or all sheets. <br>**V(w)** - Write. Overwrites specified cells with new values. <br>**V(a)** - Append. Creates a new row at the end of the sheet and writes each item in `updates_matrix` to that row. <br>**V(i)** - Insert. Inserts a new row above the row specified in the first item of `updates_matrix` and writes the updates. |
| **sheet_name**    | `str`                            | No       |         | Name of the worksheet to operate on. For `op=r`, if omitted, all sheets are read. For `op=w`, `op=a`, or `op=i`, this parameter is required. |
| **index_by_name** | `bool`                           | No       | `true`  | For read operations, if true, uses the first row as dictionary keys; otherwise, keys are in the format `col_<n>`. |
| **read_range**    | `dict`                           | No       | `{}`    | Dictionary specifying the cell range to read. Can include: `start_row`, `end_row`, `start_col`, and `end_col`. If omitted or partially specified, defaults to the entire used range. |
| **updates_matrix**| `list` (elements: `dict`)        | No       | `[]`    | A list of dictionaries describing the cells to update. Each dictionary can include: <br>**V(cell_row)** - The row to update (ignored in append mode). <br>**V(cell_col)** - The column to update. <br>**V(cell_value)** - The value to write. |
| **cell_style**    | `dict`                           | No       | `{}`    | A dictionary specifying optional style attributes for updated cells. Possible keys include: <br>**V(fontColor)** - Hex RGB code for the font color. <br>**V(bgColor)** - Hex RGB code for the cell background color. <br>**V(bold)** - Boolean to set bold font. <br>**V(italic)** - Boolean to set italic font. <br>**V(underline)** - Boolean to set underline; if true, uses single underline. |

---

## Return Values

The module returns two keys: `changed` and `result`.

- **changed** (`bool`):  
  Indicates whether the Excel file was modified. For read operations, this is still returned as `true` even though no file changes are made.

- **result** (`dict`):  
  - For read operations, returns a dictionary keyed by sheet name. Each key maps to a list of dictionaries where each dictionary represents a row with cell values. The keys for each row are determined by the header row (if `index_by_name` is true) or default to `col_<n>`.
  - For write, append, and insert operations, returns an empty dictionary upon a successful update.

**Sample Return:**

```json
{
  "changed": true,
  "result": {
      "Sheet1": [
          {"Name": "Alice", "Age": 30},
          {"Name": "Bob", "Age": 25}
      ]
  }
}
```
## Example

**Read an Excel Workbook:**
```yaml
- name: Read Excel workbook
  nomakcooper.collection.open_excel:
    src: "/tmp/sample.xlsx"
    op: "r"
    index_by_name: true
  register: result

- debug:
    var: result
```

**Overwrite Specific Cells**
```yaml
- name: Overwrite specific cells
  nomakcooper.collection.open_excel:
    src: "/tmp/sample.xlsx"
    dest: "/tmp/sample_updated.xlsx"
    op: "w"
    sheet_name: "Sheet1"
    updates_matrix:
      - cell_row: 2
        cell_col: 1
        cell_value: "New Value in row2 col1"
      - cell_row: 3
        cell_col: 2
        cell_value: "Another Value"
    cell_style:
      fontColor: "FF0000"
      bgColor: "FFFF00"
      bold: true
```
**Append a New Row**
```yaml
- name: Append new row
  nomakcooper.collection.open_excel:
    src: "/tmp/sample.xlsx"
    dest: "/tmp/sample_updated.xlsx"
    op: "a"
    sheet_name: "Sheet1"
    updates_matrix:
      - cell_col: 1
        cell_value: "Hostname"
      - cell_col: 2
        cell_value: "MyHost"
    cell_style:
      bgColor: "DDEBF7"
      bold: true
```
**Insert a New Row Above Row 5**
```yaml
- name: Insert a new row above row 5
  nomakcooper.collection.open_excel:
    src: "/tmp/sample.xlsx"
    dest: "/tmp/sample_updated.xlsx"
    op: "i"
    sheet_name: "Sheet1"
    updates_matrix:
      - cell_row: 5
        cell_col: 1
        cell_value: "Inserted"
      - cell_row: 5
        cell_col: 2
        cell_value: "Row"
    cell_style:
      italic: true
```

