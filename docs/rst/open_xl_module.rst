.. Document meta

:orphan:

.. |antsibull-internal-nbsp| unicode:: 0xA0
    :trim:

.. meta::
  :antsibull-docs: 2.16.3

.. Anchors

.. _ansible_collections.nomakcooper.collection.open_xl_module:

.. Anchors: short name for ansible.builtin

.. Title

nomakcooper.collection.open_xl module -- Read and update Excel (.xlsx) files using openpyxl
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. Collection note

.. note::
    This module is part of the `nomakcooper.collection collection <https://galaxy.ansible.com/ui/repo/published/nomakcooper/collection/>`_ (version 1.2.1).

    It is not included in ``ansible-core``.
    To check whether it is installed, run :code:`ansible-galaxy collection list`.

    To install it, use: :code:`ansible-galaxy collection install nomakcooper.collection`.
    You need further requirements to be able to use this module,
    see :ref:`Requirements <ansible_collections.nomakcooper.collection.open_xl_module_requirements>` for details.

    To use it in a playbook, specify: :code:`nomakcooper.collection.open_xl`.

.. version_added

.. rst-class:: ansible-version-added

New in nomakcooper.collection 1.2.0

.. contents::
   :local:
   :depth: 1

.. Deprecated


Synopsis
--------

.. Description

- This module reads from or writes to Excel (.xlsx) files using the openpyxl Python library.
- It supports reading the entire workbook or a single worksheet, optionally limited to a given cell range.
- For updates, you can overwrite cells, append new rows, or insert rows. You can also apply custom cell styles.
- The original Excel file is not overwritten unless you set :ansopt:`nomakcooper.collection.open\_xl#module:dest` to the same path as :ansopt:`nomakcooper.collection.open\_xl#module:src`.
- This module supports only .xlsx or .xlsm files.


.. Aliases


.. Requirements

.. _ansible_collections.nomakcooper.collection.open_xl_module_requirements:

Requirements
------------
The below requirements are needed on the host that executes this module.

- openpyxl






.. Options

Parameters
----------

.. tabularcolumns:: \X{1}{3}\X{2}{3}

.. list-table::
  :width: 100%
  :widths: auto
  :header-rows: 1
  :class: longtable ansible-option-table

  * - Parameter
    - Comments

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-cell_style"></div>

      .. _ansible_collections.nomakcooper.collection.open_xl_module__parameter-cell_style:

      .. rst-class:: ansible-option-title

      **cell_style**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-cell_style" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`dictionary`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      A dictionary specifying optional style attributes for updated cells. Possible keys include: :ansval:`fontColor` - Hex RGB code for the font color. :ansval:`bgColor` - Hex RGB code for the cell background color. :ansval:`bold` - Boolean to set bold font. :ansval:`italic` - Boolean to set italic font. :ansval:`underline` - Boolean to set underline; if true, uses single underline.


      .. rst-class:: ansible-option-line

      :ansible-option-default-bold:`Default:` :ansible-option-default:`{}`

      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-dest"></div>

      .. _ansible_collections.nomakcooper.collection.open_xl_module__parameter-dest:

      .. rst-class:: ansible-option-title

      **dest**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-dest" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Destination file path for updated Excel content.

      If omitted, defaults to appending :ansval:`\_updated.xlsx` to the :ansopt:`nomakcooper.collection.open\_xl#module:src` filename.


      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-index_by_name"></div>

      .. _ansible_collections.nomakcooper.collection.open_xl_module__parameter-index_by_name:

      .. rst-class:: ansible-option-title

      **index_by_name**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-index_by_name" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`boolean`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      For read operations, if true, uses the first row as dictionary keys. Otherwise, keys are in the format :ansval:`col\_\<n\>`.


      .. rst-class:: ansible-option-line

      :ansible-option-choices:`Choices:`

      - :ansible-option-choices-entry:`false`
      - :ansible-option-choices-entry-default:`true` :ansible-option-choices-default-mark:`← (default)`


      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-op"></div>

      .. _ansible_collections.nomakcooper.collection.open_xl_module__parameter-op:

      .. rst-class:: ansible-option-title

      **op**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-op" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string` / :ansible-option-required:`required`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      The operation to perform on the Excel file. Options: :ansval:`r` - Read-only. Returns the content from the specified sheet or all sheets. :ansval:`w` - Write. Overwrites specified cells with new values. :ansval:`a` - Append. Creates one new row at the end of the sheet, writing each item in :ansopt:`nomakcooper.collection.open\_xl#module:updates\_matrix` to that row. :ansval:`i` - Insert. Inserts a new row above the row specified in the first item of :ansopt:`nomakcooper.collection.open\_xl#module:updates\_matrix` and writes the updates.


      .. rst-class:: ansible-option-line

      :ansible-option-choices:`Choices:`

      - :ansible-option-choices-entry:`"r"`
      - :ansible-option-choices-entry:`"w"`
      - :ansible-option-choices-entry:`"a"`
      - :ansible-option-choices-entry:`"i"`


      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-read_range"></div>

      .. _ansible_collections.nomakcooper.collection.open_xl_module__parameter-read_range:

      .. rst-class:: ansible-option-title

      **read_range**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-read_range" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`dictionary`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Dictionary specifying the cell range to read.

      Can include :ansval:`start\_row`\ , :ansval:`end\_row`\ , :ansval:`start\_col`\ , and :ansval:`end\_col`.

      If omitted or partially specified, defaults to the entire used range.


      .. rst-class:: ansible-option-line

      :ansible-option-default-bold:`Default:` :ansible-option-default:`{}`

      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-sheet_name"></div>

      .. _ansible_collections.nomakcooper.collection.open_xl_module__parameter-sheet_name:

      .. rst-class:: ansible-option-title

      **sheet_name**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-sheet_name" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Name of the worksheet to operate on.

      For :ansopt:`nomakcooper.collection.open\_xl#module:op=r`\ , if omitted, all sheets are read.

      For :ansopt:`nomakcooper.collection.open\_xl#module:op=w`\ , :ansopt:`nomakcooper.collection.open\_xl#module:op=a`\ , or :ansopt:`nomakcooper.collection.open\_xl#module:op=i`\ , this parameter is required.


      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-src"></div>

      .. _ansible_collections.nomakcooper.collection.open_xl_module__parameter-src:

      .. rst-class:: ansible-option-title

      **src**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-src" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string` / :ansible-option-required:`required`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Path to the source Excel file.


      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-updates_matrix"></div>

      .. _ansible_collections.nomakcooper.collection.open_xl_module__parameter-updates_matrix:

      .. rst-class:: ansible-option-title

      **updates_matrix**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-updates_matrix" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`list` / :ansible-option-elements:`elements=dictionary`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      A list of dictionaries describing the cells to update. Each dictionary can include: :ansval:`cell\_row` - The row to update (ignored in append mode). :ansval:`cell\_col` - The column to update. :ansval:`cell\_value` - The value to write.


      .. rst-class:: ansible-option-line

      :ansible-option-default-bold:`Default:` :ansible-option-default:`[]`

      .. raw:: html

        </div>


.. Attributes


.. Notes

Notes
-----

.. note::
   - This module requires the openpyxl Python library to be installed.
   - Only .xlsx or .xlsm files are supported.

.. Seealso


.. Examples

Examples
--------

.. code-block:: yaml+jinja

    - name: Read Excel workbook
      nomakcooper.collection.open_xl:
        src: "/tmp/sample.xlsx"
        op: "r"
        index_by_name: true
      register: result
    - debug:
        var: result

    - name: Overwrite specific cells
      nomakcooper.collection.open_xl:
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

    - name: Append new row
      nomakcooper.collection.open_xl:
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

    - name: Insert a new row above row 5
      nomakcooper.collection.open_xl:
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



.. Facts


.. Return values

Return Values
-------------
Common return values are documented :ref:`here <common_return_values>`, the following are the fields unique to this module:

.. tabularcolumns:: \X{1}{3}\X{2}{3}

.. list-table::
  :width: 100%
  :widths: auto
  :header-rows: 1
  :class: longtable ansible-option-table

  * - Key
    - Description

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-changed"></div>

      .. _ansible_collections.nomakcooper.collection.open_xl_module__return-changed:

      .. rst-class:: ansible-option-title

      **changed**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-changed" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`boolean`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Indicates whether the Excel file was modified. For read operations, this is still returned as true, even though no changes were made to the file.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`true`


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-result"></div>

      .. _ansible_collections.nomakcooper.collection.open_xl_module__return-result:

      .. rst-class:: ansible-option-title

      **result**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-result" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`dictionary`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      For read operations, returns a dictionary keyed by sheet name. Each key maps to a list of dictionaries, where each dictionary represents a row with cell values. The keys for each row are determined by the header row (if index\_by\_name is true) or default to "col\_\<n\>". For write, append, and insert operations, returns an empty dictionary upon a successful update.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`{"Sheet1": [{"Age": 30, "Name": "Alice"}, {"Age": 25, "Name": "Bob"}]}`


      .. raw:: html

        </div>



..  Status (Presently only deprecated)


.. Authors

Authors
~~~~~~~

- Marco Noce (@NomakCooper)



.. Extra links

Collection links
~~~~~~~~~~~~~~~~

.. ansible-links::

  - title: "Issue Tracker"
    url: "https://github.com/NomakCooper/collection/issues"
    external: true
  - title: "Repository (Sources)"
    url: "https://github.com/NomakCooper/collection"
    external: true


.. Parsing errors
