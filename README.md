# Description
Parse opening_hours tag from OSM and returns string with current working hours depending on day of week.

# Install

```sh
$ npm install osm_opening_hours
```

# Usage
For now use can use only simple **parse** method, which returns string with current opening hours:

```sh
var osm = require('osm_opening_hours');

var opening_hours = 'Mo 10:00-12:00,12:30-15:00; Tu-Fr 08:00-12:00,12:30-15:00; Sa 08:00-12:00'

var current_working_hours = osm.parse(opening_hours);
```
