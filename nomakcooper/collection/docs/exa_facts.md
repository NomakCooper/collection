# `exa_facts` - Gathers facts Oracle Exadata Machine

## **Synopsis**
Gathers facts Oracle Exadata Machine by imageinfo, exadata.img.hw, dmidecode and databasemachine.xml

## **Requirements**
-  `Oracle Exadata Machine` target host
-  `imageinfo` command must be installed on target host.
-  `exadata.img.hw` command must be installed on target host.
-  `dmidecode` command must be installed on target host.
-  `databasemachine.xml` file must be present on the target host.

## **Options**
- no options are needed

## **Example Usage**
```yaml
  - name: Gather exa info
    nomakcooper.collection.exa_facts:
```
#### Print exa hw model from exa_hw
```yaml
  - name: print exa hw model
    debug:
      msg: "Model: {{ ansible_facts.exa_hw.model }}"
```
#### Print exa Image version from exa_img
```yaml
  - name: print exa Image version
    debug:
      msg: "Image Version: {{ ansible_facts.exa_img['Image version'] }}"
```
#### Print exa serial number from system_info
```yaml
  - name: print exa serial number
    debug:
      msg: "Serial number: {{ ansible_facts.system_info['Serial Number'] }}"
```
#### Print cell list from databasemachine
```yaml
  - name: print cell list
    debug:
      msg: "{{ ansible_facts.databasemachine.ORACLE_CLUSTER.PAGE0.RACKS.RACK.ITEM | selectattr('TYPE', 'equalto', 'cellnode') | map(attribute='ADMINNAME') | list }}"
```
#### Print ib from databasemachine
```yaml
  - name: print ibswitch list 
    debug:
      msg: "{{ ansible_facts.databasemachine.ORACLE_CLUSTER.PAGE0.RACKS.RACK.ITEM | selectattr('TYPE', 'equalto', 'ib') | map(attribute='ADMINNAME') | list }}"
```
## Return Values
```json
    "exa_hw": {
      "model": "HVM domU"
    },
```
```json
    "exa_img": {
      "Image image type": "prod",
      "Kernel version": "4.14.35-2047.518.4.2.el7uek.x86_64 #2 SMP Thu Nov 3 14:28:31 PDT 2022 x86_64",
      "Image created": "2023-03-02 03:40:44 -0800",
      "Image status": "success",
      "Uptrack kernel version": "4.14.35-2047.522.3.el7uek.x86_64 #2 SMP Fri Jan 20 16:05:02 PST 2023 x86_64",
      "Node type": "GUEST",
      "Image version": "22.1.9.0.0.230302",
      "System partition on device": "/dev/mapper/VGExaDb-LVDbSys1",
      "Image label": "OSS_22.1.9.0.0_LINUX.X64_230302",
      "Image kernel version": "4.14.35-2047.518.4.2.el7uek",
      "Install type": "XEN Guest with InfiniBand",
      "Image activated": "2023-09-02 04:02:42 +0200"
    },
```
```json
    "system_info": {
      "SKU Number": "Not Specified",
      "UUID": "123456ba-b12f-1234-acce-be12a34fab56",
      "Family": "Not Specified",
      "Serial Number": "123456ba-b12f-1234-acce-be12a34fab5",
      "Version": "4.4.4OVM",
      "Product Name": "HVM domU",
      "Wake-up Type": "Power Switch",
      "Manufacturer": "Xen"
    },
```
```json
    "databasemachine": {
      "ORACLE_CLUSTER": {
        "PAGE0": {
          "RACKS": {
            "RACK": {
              "MACHINETYPE": "487",
              "MACHINEUSIZE": "42",
              "ITEMS": "13",
              "RACK_SERIAL": "00000000",
              "ITEM": [
                {
                  "ADMINNAME": "testceladm04",
                  "ILOMIP": "10.10.10.10",
                  "UHEIGHT": "2",
                  "ILOMNAME": "testceladm04-ilom",
                  "ULOCATION": "2",
                  "TYPE": "cellnode",
                  "ADMINIP": "11.11.11.11"
                },
                {
                  "ADMINNAME": "testdbvadm01",
                  "ILOMIP": "14.14.14.14",
                  "UHEIGHT": "1",
                  "ILOMNAME": "testdbvadm01-ilom",
                  "ULOCATION": "16",
                  "CLIENTIP": null,
                  "TYPE": "computenode",
                  "ADMINIP": "14.14.14.14",
                  "CLIENTNAME": null
                },
                {
                  "ADMINIP": "16.16.16.16",
                  "ULOCATION": "20",
                  "TYPE": "ib",
                  "ADMINNAME": "testsw-iba01",
                  "UHEIGHT": "1"
                },
                {
                  "ADMINIP": "18.18.18.18",
                  "ULOCATION": "21",
                  "TYPE": "cisco",
                  "ADMINNAME": "testsw-adm01",
                  "UHEIGHT": "1"
                },
                {
                  "ADMINIP": "13.13.13.13",
                  "ULOCATION": "0",
                  "TYPE": "pdu",
                  "ADMINNAME": "testsw-pdua01",
                  "UHEIGHT": "0"
                }
              ],
              "MACHINETYPES": "X5-2 Elastic Rack HC 4TB"
            }
          },
          "RACKCOUNT": "1"
        }
      }
    }
```