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

- install_dep_become ( defualt: false ): The variable specifies whether the role and the installation of Python modules should be executed with become.

Dependencies
------------


Example Playbook
----------------

  - name: Install Dependencies as non super-user
    hosts: all
    gather_facts: no
    roles:
      - role: nomakcooper.collection.install_dep

  - name: Install Dependencies as super-user
    hosts: all
    gather_facts: no
    roles:
      - role: nomakcooper.collection.install_dep
        vars:
          install_dep_become: true

License
-------

GPL-3.0-or-later

Author Information
------------------
