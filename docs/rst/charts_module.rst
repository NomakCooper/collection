.. Document meta

:orphan:

.. |antsibull-internal-nbsp| unicode:: 0xA0
    :trim:

.. meta::
  :antsibull-docs: 2.16.3

.. Anchors

.. _ansible_collections.nomakcooper.collection.charts_module:

.. Anchors: short name for ansible.builtin

.. Title

nomakcooper.collection.charts module -- Generate high-quality charts using Plotly and save them as images.
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. Collection note

.. note::
    This module is part of the `nomakcooper.collection collection <https://galaxy.ansible.com/ui/repo/published/nomakcooper/collection/>`_ (version 1.2.0).

    It is not included in ``ansible-core``.
    To check whether it is installed, run :code:`ansible-galaxy collection list`.

    To install it, use: :code:`ansible-galaxy collection install nomakcooper.collection`.
    You need further requirements to be able to use this module,
    see :ref:`Requirements <ansible_collections.nomakcooper.collection.charts_module_requirements>` for details.

    To use it in a playbook, specify: :code:`nomakcooper.collection.charts`.

.. version_added


.. contents::
   :local:
   :depth: 1

.. Deprecated


Synopsis
--------

.. Description

- This module generates various types of charts (line, bar, pie, donut) and saves them as images.
- It provides customization options for titles, axis labels, colors, sizes, fonts, and legends.
- Uses Plotly and Kaleido for visualization and image generation.


.. Aliases


.. Requirements

.. _ansible_collections.nomakcooper.collection.charts_module_requirements:

Requirements
------------
The below requirements are needed on the host that executes this module.

- plotly
- kaleido






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
        <div class="ansibleOptionAnchor" id="parameter-filename"></div>

      .. _ansible_collections.nomakcooper.collection.charts_module__parameter-filename:

      .. rst-class:: ansible-option-title

      **filename**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-filename" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string` / :ansible-option-required:`required`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Filename for the saved chart image.


      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-fontcolor"></div>

      .. _ansible_collections.nomakcooper.collection.charts_module__parameter-fontcolor:

      .. rst-class:: ansible-option-title

      **fontcolor**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-fontcolor" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Font color for chart text.


      .. rst-class:: ansible-option-line

      :ansible-option-default-bold:`Default:` :ansible-option-default:`"#333333"`

      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-fontsize"></div>

      .. _ansible_collections.nomakcooper.collection.charts_module__parameter-fontsize:

      .. rst-class:: ansible-option-title

      **fontsize**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-fontsize" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`integer`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Font size for labels and text.


      .. rst-class:: ansible-option-line

      :ansible-option-default-bold:`Default:` :ansible-option-default:`20`

      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-format"></div>

      .. _ansible_collections.nomakcooper.collection.charts_module__parameter-format:

      .. rst-class:: ansible-option-title

      **format**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-format" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Image format for saving the chart.


      .. rst-class:: ansible-option-line

      :ansible-option-choices:`Choices:`

      - :ansible-option-choices-entry-default:`"png"` :ansible-option-choices-default-mark:`← (default)`
      - :ansible-option-choices-entry:`"jpeg"`
      - :ansible-option-choices-entry:`"webp"`
      - :ansible-option-choices-entry:`"svg"`
      - :ansible-option-choices-entry:`"pdf"`
      - :ansible-option-choices-entry:`"eps"`


      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-imgheight"></div>

      .. _ansible_collections.nomakcooper.collection.charts_module__parameter-imgheight:

      .. rst-class:: ansible-option-title

      **imgheight**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-imgheight" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`integer`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Height of the generated chart image (in pixels).


      .. rst-class:: ansible-option-line

      :ansible-option-default-bold:`Default:` :ansible-option-default:`1080`

      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-imgwidth"></div>

      .. _ansible_collections.nomakcooper.collection.charts_module__parameter-imgwidth:

      .. rst-class:: ansible-option-title

      **imgwidth**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-imgwidth" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`integer`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Width of the generated chart image (in pixels).


      .. rst-class:: ansible-option-line

      :ansible-option-default-bold:`Default:` :ansible-option-default:`1920`

      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-path"></div>

      .. _ansible_collections.nomakcooper.collection.charts_module__parameter-path:

      .. rst-class:: ansible-option-title

      **path**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-path" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string` / :ansible-option-required:`required`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Path where the chart image will be saved.


      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-shape_line"></div>

      .. _ansible_collections.nomakcooper.collection.charts_module__parameter-shape_line:

      .. rst-class:: ansible-option-title

      **shape_line**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-shape_line" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Line shape for line charts.


      .. rst-class:: ansible-option-line

      :ansible-option-choices:`Choices:`

      - :ansible-option-choices-entry:`"spline"`
      - :ansible-option-choices-entry:`"linear"`


      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-sizehole"></div>

      .. _ansible_collections.nomakcooper.collection.charts_module__parameter-sizehole:

      .. rst-class:: ansible-option-title

      **sizehole**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-sizehole" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`float`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Size of the hole in a donut chart (0 for a full pie chart).


      .. rst-class:: ansible-option-line

      :ansible-option-default-bold:`Default:` :ansible-option-default:`0.5`

      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-slicecolor"></div>

      .. _ansible_collections.nomakcooper.collection.charts_module__parameter-slicecolor:

      .. rst-class:: ansible-option-title

      **slicecolor**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-slicecolor" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`list` / :ansible-option-elements:`elements=string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Colors for pie or donut chart slices.


      .. rst-class:: ansible-option-line

      :ansible-option-default-bold:`Default:` :ansible-option-default:`[]`

      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-slicedata"></div>

      .. _ansible_collections.nomakcooper.collection.charts_module__parameter-slicedata:

      .. rst-class:: ansible-option-title

      **slicedata**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-slicedata" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`list` / :ansible-option-elements:`elements=float`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Data values for pie or donut chart slices.


      .. rst-class:: ansible-option-line

      :ansible-option-default-bold:`Default:` :ansible-option-default:`[]`

      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-slicelabel"></div>

      .. _ansible_collections.nomakcooper.collection.charts_module__parameter-slicelabel:

      .. rst-class:: ansible-option-title

      **slicelabel**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-slicelabel" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`list` / :ansible-option-elements:`elements=string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Labels for pie or donut chart slices.


      .. rst-class:: ansible-option-line

      :ansible-option-default-bold:`Default:` :ansible-option-default:`[]`

      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-titlechart"></div>

      .. _ansible_collections.nomakcooper.collection.charts_module__parameter-titlechart:

      .. rst-class:: ansible-option-title

      **titlechart**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-titlechart" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Title of the chart.


      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-titlelegend"></div>

      .. _ansible_collections.nomakcooper.collection.charts_module__parameter-titlelegend:

      .. rst-class:: ansible-option-title

      **titlelegend**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-titlelegend" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Title for the legend.


      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-type"></div>

      .. _ansible_collections.nomakcooper.collection.charts_module__parameter-type:

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

      Type of chart to generate.


      .. rst-class:: ansible-option-line

      :ansible-option-choices:`Choices:`

      - :ansible-option-choices-entry:`"line"`
      - :ansible-option-choices-entry:`"bar"`
      - :ansible-option-choices-entry:`"pie"`
      - :ansible-option-choices-entry:`"donut"`


      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-xaxis"></div>

      .. _ansible_collections.nomakcooper.collection.charts_module__parameter-xaxis:

      .. rst-class:: ansible-option-title

      **xaxis**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-xaxis" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`list` / :ansible-option-elements:`elements=string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      X-axis data values.


      .. rst-class:: ansible-option-line

      :ansible-option-default-bold:`Default:` :ansible-option-default:`[]`

      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-xaxisname"></div>

      .. _ansible_collections.nomakcooper.collection.charts_module__parameter-xaxisname:

      .. rst-class:: ansible-option-title

      **xaxisname**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-xaxisname" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Label for the X-axis.


      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-yaxis"></div>

      .. _ansible_collections.nomakcooper.collection.charts_module__parameter-yaxis:

      .. rst-class:: ansible-option-title

      **yaxis**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-yaxis" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`list` / :ansible-option-elements:`elements=list`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      List of Y-axis data series (each series is a list of numeric values).


      .. rst-class:: ansible-option-line

      :ansible-option-default-bold:`Default:` :ansible-option-default:`[]`

      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-yaxiscolor"></div>

      .. _ansible_collections.nomakcooper.collection.charts_module__parameter-yaxiscolor:

      .. rst-class:: ansible-option-title

      **yaxiscolor**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-yaxiscolor" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`list` / :ansible-option-elements:`elements=string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Colors for the Y-axis data series.


      .. rst-class:: ansible-option-line

      :ansible-option-default-bold:`Default:` :ansible-option-default:`[]`

      .. raw:: html

        </div>

  * - .. raw:: html

        <div class="ansible-option-cell">
        <div class="ansibleOptionAnchor" id="parameter-yaxisname"></div>

      .. _ansible_collections.nomakcooper.collection.charts_module__parameter-yaxisname:

      .. rst-class:: ansible-option-title

      **yaxisname**

      .. raw:: html

        <a class="ansibleOptionLink" href="#parameter-yaxisname" title="Permalink to this option"></a>

      .. ansible-option-type-line::

        :ansible-option-type:`list` / :ansible-option-elements:`elements=string`

      .. raw:: html

        </div>

    - .. raw:: html

        <div class="ansible-option-cell">

      Labels for the Y-axis data series.


      .. rst-class:: ansible-option-line

      :ansible-option-default-bold:`Default:` :ansible-option-default:`[]`

      .. raw:: html

        </div>


.. Attributes


.. Notes


.. Seealso


.. Examples

Examples
--------

.. code-block:: yaml+jinja

    - name: Generate a line chart for CPU Usage Over Time
      nomakcooper.collection.charts:
        type: "line"
        titlechart: "CPU Usage Over Time"
        xaxis: ['00:00', '02:00', '04:00', '06:00', '08:00']
        xaxisname: "Time"
        yaxis: [[20, 30, 40, 50, 60]]
        yaxisname: ["CPU Usage %"]
        yaxiscolor: ["red"]
        shape_line: "spline"
        imgwidth: 1920
        imgheight: 1080
        path: "/charts"
        filename: "cpu_usage"
        format: "png"
        titlelegend: "Usage"
      delegate_to: localhost

    - name: Generate a pie chart for Resource Distribution
      nomakcooper.collection.charts:
        type: "pie"
        titlechart: "Resource Distribution"
        slicedata: [10, 20, 30, 40]
        slicelabel: ["A", "B", "C", "D"]
        slicecolor: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"]
        imgwidth: 800
        imgheight: 600
        path: "/charts"
        filename: "resource_distribution"
        format: "png"
      delegate_to: localhost



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

      .. _ansible_collections.nomakcooper.collection.charts_module__return-changed:

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

      Indicates whether the chart image was successfully generated.


      .. rst-class:: ansible-option-line

      :ansible-option-returned-bold:`Returned:` always

      .. rst-class:: ansible-option-line
      .. rst-class:: ansible-option-sample

      :ansible-option-sample-bold:`Sample:` :ansible-rv-sample-value:`true`


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
