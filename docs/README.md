# Source for https://tc39.github.io/archives/

The files in [_bugzilla](_bugzilla) were generated using the bzxml-js tool located in [bugzilla/util](../bugzilla/util)
from the XML sources in [bugzilla/xml](../bugzilla/xml). To massage into the Jekyll document format, the JSON files were
wrapped with document header markers `---`, this permit the data to be accessed and rendered using a template.

Jekyll is configured to output each document in the [_bugzilla](_bugzilla) directory using the
[_layouts/bugzilla.html](_layouts/bugzilla.html) page template. The [bugzilla.html](bugzilla.html) file produces an
index table for all tickets.
