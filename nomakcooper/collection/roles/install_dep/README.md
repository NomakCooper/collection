nomakcooper.collection.install_dep
=========

Install py module dependences on Control Node from collection requirements file.
This role is required for using the nomakcooper.collection.charts module.

Requirements
------------

- ansible.builtin.slurp
- ansible.builtin.set_fact
- ansible.builtin.pip

Role Variables
--------------

Dependencies
------------


Example Playbook
----------------
```yaml
  - name: Install Dependencies on CN
    hosts: all
    gather_facts: no
    roles:
      - role: nomakcooper.collection.install_dep
```
```yaml
  - name: Install Dependencies on CN
    hosts: all
    gather_facts: no

    pre_tasks:

      - name: install dependencies
        block:
          - include_role:
              name: nomakcooper.collection.install_dep
        become: false
```

License
-------

GPL-3.0-or-later

Author Information
------------------
