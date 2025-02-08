# `charts` - Generate charts in image format on the ansible control node.

## **Synopsis**
Generate charts in image format on the ansible control node.

## **Requirements**
- `install dependences`
- `kaleido` python module
- `plotly` python module


## **Options**
| Parameter      | Type      | Required | Sample                                      | Comment |
|--------------|----------|----------|--------------------------------|----------------------------------------------------------------------------------------------------------------|
| **titlechart**   | `str`    | ❌ No    | `"CPU Usage Over Time"`         | Title displayed at the top of the chart. |
| **type**        | `str`    | ✅ Yes   | `"line"`                        | Type of chart. Options: `"line"`, `"bar"`, `"pie"`, `"donut"`. |
| **xaxis**       | `list`   | ❌ No    | `["2025-02-06T12:10", "2025-02-06T12:20"]` | X-axis data values (time or categories). |
| **xaxisname**   | `str`    | ❌ No    | `"Timestamp"`                   | Label for the X-axis. |
| **yaxis**       | `list`   | ❌ No    | `[[12.3, 14.5, 13.1], [5.2, 6.3, 5.8]]`  | List of Y-axis data series. |
| **yaxisname**   | `list`   | ❌ No    | `["User %", "System %"]`        | List of labels for Y-axis data series. |
| **yaxiscolor**  | `list`   | ❌ No    | `["red", "blue"]`               | Colors for each Y-axis series. |
| **imgwidth**    | `int`    | ❌ No    | `1920`                           | Width of the output image (pixels). |
| **imgheight**   | `int`    | ❌ No    | `1080`                           | Height of the output image (pixels). |
| **shape_line**  | `str`    | ❌ No    | `"spline"`                       | Shape of lines in `line` charts. Options: `"spline"`, `"linear"`. |
| **format**      | `str`    | ❌ No    | `"png"`                          | Output format. Options: `"png"`, `"jpeg"`, `"webp"`, `"svg"`, `"pdf"`, `"eps"`. |
| **path**        | `str`    | ✅ Yes   | `"/charts"`                      | Directory where the chart image is saved. |
| **filename**    | `str`    | ✅ Yes   | `"cpu_usage"`                    | Name of the saved image file (without extension). |
| **fontsize**    | `int`    | ❌ No    | `20`                             | Font size for text elements. |
| **fontcolor**   | `str`    | ❌ No    | `"#333333"`                      | Font color for all chart text. |
| **titlelegend** | `str`    | ❌ No    | `"CPU Breakdown"`                | Title displayed for the legend. |
| **slicedata**   | `list`   | ❌ No    | `[50, 30, 20]`                   | Values for `pie` or `donut` charts. |
| **slicelabel**  | `list`   | ❌ No    | `["Cache", "Swap", "RAM"]`       | Labels for `pie` or `donut` chart slices. |
| **slicecolor**  | `list`   | ❌ No    | `["orange", "blue", "green"]`    | Colors assigned to each slice in `pie` or `donut` charts. |
| **sizehole**    | `float`  | ❌ No    | `0.5`                            | Size of the hole in a `donut` chart (`0` for `pie`). |

## **Example Usage**
This portion of code converts the load average data collected by sar using my other module sar_facts.
```yaml
    - name: Collect CPU Usage Data
      sar_facts:
        type: "cpu"
        date_start: "2025-02-06"
        date_end: "2025-02-07"

    - name: Generate CPU Usage Line Chart
      charts:
        titlechart: "CPU Usage Over Time (Multi-Day)"
        type: "line"
        xaxis: "{{ ansible_facts.sar_cpu | map(attribute='date') | zip(ansible_facts.sar_cpu | map(attribute='time')) | map('join', 'T') | list }}"
        xaxisname: "Timestamp"
        yaxis:
          - "{{ ansible_facts.sar_cpu | selectattr('%user', 'defined') | map(attribute='%user') | map('float') | list }}"
          - "{{ ansible_facts.sar_cpu | selectattr('%system', 'defined') | map(attribute='%system') | map('float') | list }}"
          - "{{ ansible_facts.sar_cpu | selectattr('%idle', 'defined') | map(attribute='%idle') | map('float') | list }}"
        yaxisname: ["User %", "System %", "Idle %"]
        yaxiscolor: ["#FF5733", "#33A1FF", "#28A745"]
        imgwidth: 1920
        imgheight: 1080
        shape_line: "spline"
        format: "png"
        path: "/tmp"
        filename: "cpu_usage_chart_multi_day"
        titlelegend: "CPU Breakdown"
      delegate_to: localhost
```      
## Return Values
example chart:
![chart](https://raw.githubusercontent.com/NomakCooper/charts/refs/heads/main/cpu_usage_chart_multi_day.png)