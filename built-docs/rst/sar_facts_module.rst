.. Document meta

:orphan:

.. |antsibull-internal-nbsp| unicode:: 0xA0
    :trim:

.. meta::
  :antsibull-docs: 2.16.3

.. Anchors

.. _ansible_collections.nomakcooper.collection.sar_facts_module:

.. Anchors: short name for ansible.builtin

.. Title

nomakcooper.collection.sar_facts module -- Collect system activity report (SAR) data for system performance monitoring.
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. Collection note

.. note::
    This module is part of the `nomakcooper.collection collection <https://galaxy.ansible.com/ui/repo/published/nomakcooper/collection/>`_ (version 1.0.10).

    It is not included in ``ansible-core``.
    To check whether it is installed, run :code:`ansible-galaxy collection list`.

    To install it, use: :code:`ansible-galaxy collection install nomakcooper.collection`.

    To use it in a playbook, specify: :code:`nomakcooper.collection.sar_facts`.

.. version_added


.. contents::
   :local:
   :depth: 1

.. Deprecated


Synopsis
--------

.. Description

- Retrieves SAR data using the \`sar\` command from system logs.
- Supports filtering by date range, time range, and partition details.
- Returns performance metrics such as CPU utilization, memory usage, disk activity, and network statistics.


.. Aliases


.. Requirements






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
        <div class="ansibleOptionAnchor" id="parameter-average"></div>

      .. _ansible_collections.nomakcooper.collection.sar_facts_module__parameter-average:

      .. rst-class:: ansible-option-title

      **average**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-average" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`boolean`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Whether to retrieve only the average values.


      .. rst-class:: ansible-option-line

      :ansible-option-choices:`Choices:`

      - :ansible-option-choices-entry-default:`false` :ansible-option-choices-default-mark:`← (default)`
      - :ansible-option-choices-entry:`true`


      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-date_end"></div>

      .. _ansible_collections.nomakcooper.collection.sar_facts_module__parameter-date_end:

      .. rst-class:: ansible-option-title

      **date_end**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-date_end" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      End date for collecting SAR data (format YYYY-MM-DD).


      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-date_start"></div>

      .. _ansible_collections.nomakcooper.collection.sar_facts_module__parameter-date_start:

      .. rst-class:: ansible-option-title

      **date_start**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-date_start" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Start date for collecting SAR data (format YYYY-MM-DD).


      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-partition"></div>

      .. _ansible_collections.nomakcooper.collection.sar_facts_module__parameter-partition:

      .. rst-class:: ansible-option-title

      **partition**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-partition" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`boolean`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Whether to retrieve partition-specific disk statistics.


      .. rst-class:: ansible-option-line

      :ansible-option-choices:`Choices:`

      - :ansible-option-choices-entry-default:`false` :ansible-option-choices-default-mark:`← (default)`
      - :ansible-option-choices-entry:`true`


      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-time_end"></div>

      .. _ansible_collections.nomakcooper.collection.sar_facts_module__parameter-time_end:

      .. rst-class:: ansible-option-title

      **time_end**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-time_end" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      End time for collecting SAR data (format HH:MM:SS).


      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-time_start"></div>

      .. _ansible_collections.nomakcooper.collection.sar_facts_module__parameter-time_start:

      .. rst-class:: ansible-option-title

      **time_start**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-time_start" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Start time for collecting SAR data (format HH:MM:SS).


      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-type"></div>

      .. _ansible_collections.nomakcooper.collection.sar_facts_module__parameter-type:

      .. rst-class:: ansible-option-title

      **type**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-type" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string` / :ansible-option-required:`required`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Type of SAR data to retrieve.


      .. rst-class:: ansible-option-line

      :ansible-option-choices:`Choices:`

      - :ansible-option-choices-entry:`"cpu"`
      - :ansible-option-choices-entry:`"memory"`
      - :ansible-option-choices-entry:`"swap"`
      - :ansible-option-choices-entry:`"network"`
      - :ansible-option-choices-entry:`"disk"`
      - :ansible-option-choices-entry:`"load"`


      .. raw:: html

        </div>


.. Attributes


.. Notes


.. Seealso


.. Examples



.. Facts


.. Return values


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
