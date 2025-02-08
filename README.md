# Ansible Collection - nomakcooper.collection
![collection](https://img.shields.io/badge/ansible-collection-blue?style=flat-square&logo=ansible&logoColor=white)
![automation](https://img.shields.io/badge/ansible-automation-blue?style=flat-square&logo=ansible&logoColor=white)
![galaxy](https://img.shields.io/badge/ansible-galaxy-blue?style=flat-square&logo=ansible&logoColor=white)
![module](https://img.shields.io/badge/ansible-module-blue?style=flat-square&logo=ansible&logoColor=white)

## Documentation for the collection.
* This collection includes several custom modules developed by [@NomakCooper](https://github.com/NomakCooper).
* The modules are dynamically added to the collection through GitHub Action.
### How to use this collection and module

* collection install :
```bash
$ ansible-galaxy collection install nomakcooper.collection
```
* module usage :
```yaml
- name: Retrieve load average for today
  nomakcooper.collection.sar_facts:
    type: "load"
```

### Module list :

* **sar_facts** ( Collect system activity report (SAR) data for system performance monitoring )
    * extended documentation at [GiHub sar_facts](https://github.com/NomakCooper/sar_facts) 
* **exa_facts** ( Gathers facts Oracle Exadata Machine )
    * extended documentation at [GiHub exa_facts](https://github.com/NomakCooper/exa_facts)
