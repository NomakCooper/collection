.. Document meta

:orphan:

.. |antsibull-internal-nbsp| unicode:: 0xA0
    :trim:

.. meta::
  :antsibull-docs: 2.16.3

.. Anchors

.. _ansible_collections.nomakcooper.collection.exa_facts_module:

.. Anchors: short name for ansible.builtin

.. Title

nomakcooper.collection.exa_facts module -- Gathers facts about Oracle Exadata Machine and rack.
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. Collection note

.. note::
    This module is part of the `nomakcooper.collection collection <https://galaxy.ansible.com/ui/repo/published/nomakcooper/collection/>`_ (version 1.0.10).

    It is not included in ``ansible-core``.
    To check whether it is installed, run :code:`ansible-galaxy collection list`.

    To install it, use: :code:`ansible-galaxy collection install nomakcooper.collection`.
    You need further requirements to be able to use this module,
    see :ref:`Requirements <ansible_collections.nomakcooper.collection.exa_facts_module_requirements>` for details.

    To use it in a playbook, specify: :code:`nomakcooper.collection.exa_facts`.

.. version_added


.. contents::
   :local:
   :depth: 1

.. Deprecated


Synopsis
--------

.. Description

- Gathers facts about Oracle Exadata Machine and rack.
- This module currently supports Oracle Exadata Machine.


.. Aliases


.. Requirements

.. _ansible_collections.nomakcooper.collection.exa_facts_module_requirements:

Requirements
------------
The below requirements are needed on the host that executes this module.

- /usr/local/bin/imageinfo
- /usr/sbin/exadata.img.hw
- /usr/sbin/dmidecode
- /opt/oracle.SupportTools/onecommand/databasemachine.xml






.. Options


.. Attributes


.. Notes

Notes
-----

.. note::
   - This module shows imageinfo attribute, exadata img hw, dmidecode system info and content of databasemachine.xml.

.. Seealso


.. Examples

Examples
--------

.. code-block:: yaml+jinja

    - name: Gather exa info
      exa_facts:



.. Facts

Returned Facts
--------------
Facts returned by this module are added/updated in the ``hostvars`` host facts and can be referenced by name just like any other host fact. They do not need to be registered in order to use them.

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
        <div class="ansibleOptionAnchor" id="return-ansible_facts/databasemachine"></div>

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/databasemachine:

      .. rst-class:: ansible-option-title

      **databasemachine**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/databasemachine" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`list` / :ansible-option-elements:`elements=string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Complex dict created by databasemachine.xml file.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/databasemachine/ORACLE_CLUSTER"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/databasemachine/oracle_cluster:

      .. rst-class:: ansible-option-title

      **ORACLE_CLUSTER**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/databasemachine/ORACLE_CLUSTER" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`dictionary`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      All item in xml file.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always


      .. raw:: html

        </div>



  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/exa_hw"></div>

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/exa_hw:

      .. rst-class:: ansible-option-title

      **exa_hw**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/exa_hw" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`list` / :ansible-option-elements:`elements=string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      value from exadata.img.hw command.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/exa_hw/model"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/exa_hw/model:

      .. rst-class:: ansible-option-title

      **model**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/exa_hw/model" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      Machine Model.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"HVM domU"`


      .. raw:: html

        </div>



  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/exa_img"></div>

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/exa_img:

      .. rst-class:: ansible-option-title

      **exa_img**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/exa_img" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`list` / :ansible-option-elements:`elements=string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      imageinfo parameter.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/exa_img/Image%20activated"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/exa_img/image activated:

      .. rst-class:: ansible-option-title

      **Image activated**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/exa_img/Image%20activated" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      Image activated date and time.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"2023-09-02 04:02:42 +0200"`


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/exa_img/Image%20created"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/exa_img/image created:

      .. rst-class:: ansible-option-title

      **Image created**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/exa_img/Image%20created" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      Image creation date and time.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"2023-03-02 03:40:44 -0800"`


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/exa_img/Image%20image%20type"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/exa_img/image image type:

      .. rst-class:: ansible-option-title

      **Image image type**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/exa_img/Image%20image%20type" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      The image type.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"production"`


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/exa_img/Image%20kernel%20version"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/exa_img/image kernel version:

      .. rst-class:: ansible-option-title

      **Image kernel version**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/exa_img/Image%20kernel%20version" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      Image kernel version.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"4.14.35-2047.518.4.2.el7uek"`


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/exa_img/Image%20label"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/exa_img/image label:

      .. rst-class:: ansible-option-title

      **Image label**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/exa_img/Image%20label" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      Image label.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"OSS\_22.1.9.0.0\_LINUX.X64\_230302"`


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/exa_img/Image%20status"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/exa_img/image status:

      .. rst-class:: ansible-option-title

      **Image status**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/exa_img/Image%20status" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      Image status.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"success"`


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/exa_img/Image%20version"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/exa_img/image version:

      .. rst-class:: ansible-option-title

      **Image version**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/exa_img/Image%20version" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      Image version.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"22.1.9.0.0.230302"`


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/exa_img/Install%20type"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/exa_img/install type:

      .. rst-class:: ansible-option-title

      **Install type**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/exa_img/Install%20type" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      Install type.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"XEN Guest with InfiniBand"`


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/exa_img/Kernel%20version"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/exa_img/kernel version:

      .. rst-class:: ansible-option-title

      **Kernel version**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/exa_img/Kernel%20version" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      Kernel Version.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"4.14.35-2047.518.4.2.el7uek.x86\_64..."`


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/exa_img/Node%20type"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/exa_img/node type:

      .. rst-class:: ansible-option-title

      **Node type**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/exa_img/Node%20type" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      Node type.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"GUEST"`


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/exa_img/System%20partition%20on%20device"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/exa_img/system partition on device:

      .. rst-class:: ansible-option-title

      **System partition on device**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/exa_img/System%20partition%20on%20device" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      System partition volume.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"/dev/mapper/VGExaDb-LVDbSys2"`


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/exa_img/Uptrack%20kernel%20version"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/exa_img/uptrack kernel version:

      .. rst-class:: ansible-option-title

      **Uptrack kernel version**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/exa_img/Uptrack%20kernel%20version" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      Uptrack kernel version.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"4.14.35-2047.522.3.el7uek.x86\_64..."`


      .. raw:: html

        </div>



  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/system_info"></div>

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/system_info:

      .. rst-class:: ansible-option-title

      **system_info**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/system_info" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`list` / :ansible-option-elements:`elements=string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      paramenter from dmidecode command.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/system_info/Family"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/system_info/family:

      .. rst-class:: ansible-option-title

      **Family**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/system_info/Family" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      Family.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"Not Specified"`


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/system_info/Manufacturer"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/system_info/manufacturer:

      .. rst-class:: ansible-option-title

      **Manufacturer**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/system_info/Manufacturer" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      Manufacturer.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"Xen"`


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/system_info/Product%20Name"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/system_info/product name:

      .. rst-class:: ansible-option-title

      **Product Name**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/system_info/Product%20Name" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      Product Name.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"HVM domU"`


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/system_info/Serial%20Number"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/system_info/serial number:

      .. rst-class:: ansible-option-title

      **Serial Number**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/system_info/Serial%20Number" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      Family.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"089271ba-b91f-4230-acce-be01a22fab09"`


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/system_info/SKU%20Number"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/system_info/sku number:

      .. rst-class:: ansible-option-title

      **SKU Number**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/system_info/SKU%20Number" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      SKU Number.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"B88854"`


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/system_info/UUID"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/system_info/uuid:

      .. rst-class:: ansible-option-title

      **UUID**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/system_info/UUID" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      UUID.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"089271ba-b91f-4230-acce-be01a22fab09"`


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/system_info/Version"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/system_info/version:

      .. rst-class:: ansible-option-title

      **Version**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/system_info/Version" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      Version.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"4.4.4OVM"`


      .. raw:: html

        </div>


  * - .. raw:: html

        <div class="ansible-option-indent"></div><div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="return-ansible_facts/system_info/Wake-up%20Type"></div>

      .. raw:: latex

        \hspace{0.02\textwidth}\begin{minipage}[t]{0.3\textwidth}

      .. _ansible_collections.nomakcooper.collection.exa_facts_module__return-ansible_facts/system_info/wake-up type:

      .. rst-class:: ansible-option-title

      **Wake-up Type**

      .. raw:: html

        <a class="ansibleOptionLink" href="#return-ansible_facts/system_info/Wake-up%20Type" title="Permalink to this return value"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

      .. raw:: latex

        \end{minipage}

    - .. raw:: html

        <div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">

      Wake-up Type.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`"Power Switch"`


      .. raw:: html

        </div>




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
