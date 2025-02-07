# `sar_facts` - Gather System Activity Report

## **Synopsis**
Retrieves system activity report (SAR) data for performance monitoring.

## **Requirements**
- `sysstat` package must be installed on the target host.
- `sar` command must be installed on target host.
- `Python` version >= `3.8`

## **Options**
|**parameter**|**type**|**required**|**choices**|**default**|**description**|
|:-|:-|:-|:-|:-|:-|
|type|str|true|cpu, load, memory, swap, network, disk|ND|collection category|
|date\_start|str|false|ND|None|collection start date format: **YYYY-MM-DD**|
|date\_end|str|false|ND|None|collection end date format: **YYYY-MM-DD**|
|time_start|str|false|ND|ND|collection start time format: **24H**|
|time_end|str|false|ND|ND|collection end time format: **24H**|
|average|bool|false|true,false|false|get only average data|
|partition|bool|false|true,false|false|get disk data by partition|

## **Example Usage**
```yaml
- name: Collect disk data for all partitions from 2025-02-06 to 2025-02-07
  nomakcooper.collection.sar_facts:
    type: "disk"
    date_start: "2025-02-06"
    date_end: "2025-02-07"
    partition: true
```
```yaml
- name: Get cpu data between 08:00:00 and 12:00:00 for all stored days
  nomakcooper.collection.sar_facts:
    type: "cpu"
    time_start: "08:00:00"
    time_end: "12:00:00"
```
```yaml
- name: Fetch memory usage data for 2025-02-07
  nomakcooper.collection.sar_facts:
    type: "memory"
    date_start: "2025-02-07"
```
```yaml
- name: Get only average disk data for 2025-02-06
  nomakcooper.collection.sar_facts:
    type: "disk"
    date_start: "2025-02-06"
    average: true
```
```yaml
- name: Retrieve system load average for today
  nomakcooper.collection.sar_facts:
    type: "load"
```
#### Filter data
```yaml
    - name: Extract all await values for centos-root ( from disk type partitioned )
      set_fact:
        root_await: >-
          {{ ansible_facts.sar_data.disk
            | selectattr('DEV', 'equalto', 'centos-root')
            | map(attribute='await')
            | list
          }}
```
```yaml
    - name: Extract all rxpck/s values for enp0s3 net interface
      set_fact:
        enp0s3_rxpck: >-
          {{ ansible_facts.sar_data.network
            | selectattr('IFACE', 'equalto', 'enp0s3')
            | map(attribute='rxpck/s')
            | list
          }}
```
## Return Values
```json
    "ansible_facts.sar_data.cpu": [
        {
            "%idle": "99.84",
            "%iowait": "0.00",
            "%nice": "0.00",
            "%steal": "0.00",
            "%system": "0.07",
            "%user": "0.09",
            "AM": "AM",
            "cpu": "all",
            "date": "2025-02-07",
            "time": "04:10:01"
        }
    ]
```
```json
    "ansible_facts.sar_data.load": [
        {
            "AM": "AM",
            "blocked": "0",
            "date": "2025-02-07",
            "ldavg-1": "0.00",
            "ldavg-15": "0.05",
            "ldavg-5": "0.01",
            "plist-sz": "116",
            "runq-sz": "1",
            "time": "04:10:01"
        }
    ]
```
```json
    "ansible_facts.sar_data.memory": [
        {
            "%commit": "7.24",
            "%memused": "81.82",
            "AM": "AM",
            "date": "2025-02-07",
            "kbactive": "614788",
            "kbbuffers": "4076",
            "kbcached": "1135156",
            "kbcommit": "288172",
            "kbdirty": "0",
            "kbinact": "595776",
            "kbmemfree": "342208",
            "kbmemused": "1539660",
            "time": "04:10:01"
        }
    ]
```
```json
    "ansible_facts.sar_data.swap": [
        {
            "%swpcad": "0.00",
            "%swpused": "0.00",
            "AM": "AM",
            "date": "2025-02-07",
            "kbswpcad": "0",
            "kbswpfree": "2097148",
            "kbswpused": "0",
            "time": "04:10:01"
        }
    ]
```
```json
    "ansible_facts.sar_data.network": [
        {
            "AM": "AM",
            "IFACE": "enp0s3",
            "date": "2025-02-07",
            "rxcmp/s": "0.00",
            "rxkB/s": "0.43",
            "rxmcst/s": "0.00",
            "rxpck/s": "0.45",
            "time": "04:10:01",
            "txcmp/s": "0.00",
            "txkB/s": "0.23",
            "txpck/s": "0.29"
        },
        {
            "AM": "AM",
            "IFACE": "enp0s8",
            "date": "2025-02-07",
            "rxcmp/s": "0.00",
            "rxkB/s": "0.01",
            "rxmcst/s": "0.02",
            "rxpck/s": "0.16",
            "time": "04:10:01",
            "txcmp/s": "0.00",
            "txkB/s": "0.00",
            "txpck/s": "0.02"
        },
        {
            "AM": "AM",
            "IFACE": "lo",
            "date": "2025-02-07",
            "rxcmp/s": "0.00",
            "rxkB/s": "0.00",
            "rxmcst/s": "0.00",
            "rxpck/s": "0.00",
            "time": "04:10:01",
            "txcmp/s": "0.00",
            "txkB/s": "0.00",
            "txpck/s": "0.00"
        }
    ]
```
```json
    "ansible_facts.sar_data.disk": [
        {
            "%util": "0.01",
            "AM": "AM",
            "DEV": "dev8-0",
            "avgqu-sz": "0.00",
            "avgrq-sz": "14.54",
            "await": "2.15",
            "date": "2025-02-07",
            "rd_sec/s": "0.00",
            "svctm": "0.66",
            "time": "04:10:01",
            "tps": "0.18",
            "wr_sec/s": "2.57"
        },
        {
            "%util": "0.01",
            "AM": "AM",
            "DEV": "dev253-0",
            "avgqu-sz": "0.00",
            "avgrq-sz": "14.26",
            "await": "2.18",
            "date": "2025-02-07",
            "rd_sec/s": "0.00",
            "svctm": "0.61",
            "time": "04:10:01",
            "tps": "0.19",
            "wr_sec/s": "2.71"
        },
        {
            "%util": "0.00",
            "AM": "AM",
            "DEV": "dev253-1",
            "avgqu-sz": "0.00",
            "avgrq-sz": "0.00",
            "await": "0.00",
            "date": "2025-02-07",
            "rd_sec/s": "0.00",
            "svctm": "0.00",
            "time": "04:10:01",
            "tps": "0.00",
            "wr_sec/s": "0.00"
        }
    ]
```
```json
    "ansible_facts.sar_data.disk": [
        {
            "%util": "0.01",
            "AM": "AM",
            "DEV": "sda",
            "avgqu-sz": "0.00",
            "avgrq-sz": "14.54",
            "await": "2.15",
            "date": "2025-02-07",
            "rd_sec/s": "0.00",
            "svctm": "0.66",
            "time": "04:10:01",
            "tps": "0.18",
            "wr_sec/s": "2.57"
        },
        {
            "%util": "0.01",
            "AM": "AM",
            "DEV": "centos-root",
            "avgqu-sz": "0.00",
            "avgrq-sz": "14.26",
            "await": "2.18",
            "date": "2025-02-07",
            "rd_sec/s": "0.00",
            "svctm": "0.61",
            "time": "04:10:01",
            "tps": "0.19",
            "wr_sec/s": "2.71"
        },
        {
            "%util": "0.00",
            "AM": "AM",
            "DEV": "centos-swap",
            "avgqu-sz": "0.00",
            "avgrq-sz": "0.00",
            "await": "0.00",
            "date": "2025-02-07",
            "rd_sec/s": "0.00",
            "svctm": "0.00",
            "time": "04:10:01",
            "tps": "0.00",
            "wr_sec/s": "0.00"
        }
    ]
```