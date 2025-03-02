var statesData = {
	"type": "FeatureCollection",
	"features": [
	  // ---------------------------------------
	  //  Example Feature: Alabama (AL)
	  // ---------------------------------------
	  {
		"type": "Feature",
		"properties": {
		  "name": "Alabama",
		  "postal": "AL"
		},
		"geometry": {
		  "type": "Polygon",
		  "coordinates": [
			[
			  [-88.202745, 34.995703],
			  [-84.999927, 34.991821],
			  [-85.000497, 31.999419],
			  [-87.598682, 30.997536],
			  [-88.474297, 30.371694],
			  [-88.386872, 30.366113],
			  [-88.403193, 31.246643],
			  [-88.202745, 34.995703]
			]
		  ]
		}
	  },
	  // ---------------------------------------
	  //  Example Feature: Alaska (AK)
	  //  (Highly simplified geometry)
	  // ---------------------------------------
	  {
		"type": "Feature",
		"properties": {
		  "name": "Alaska",
		  "postal": "AK"
		},
		"geometry": {
		  "type": "MultiPolygon",
		  "coordinates": [
			[ // Mainland + Panhandle
			  [
				[-130.010025, 54.964004],
				[-130.536110, 55.451591],
				[-133.065941, 56.683587],
				[-131.707809, 57.984141],
				[-130.007782, 57.027347],
				[-130.010025, 54.964004]
			  ]
			],
			[ // Mainland southwestern portion
			  [
				[-160.000000, 55.000000],
				[-162.002411, 54.992439],
				[-167.022099, 60.000000],
				[-171.731657, 63.782515],
				[-166.467792, 66.000000],
				[-162.000000, 64.000000],
				[-160.000000, 55.000000]
			  ]
			],
			[ // Far west Aleutian chain (extremely simplified)
			  [
				[-177.002411, 51.992439],
				[-179.992411, 51.992439],
				[-179.992411, 53.992439],
				[-177.002411, 53.992439],
				[-177.002411, 51.992439]
			  ]
			]
		  ]
		}
	  },
	  // ---------------------------------------
	  //  Example Feature: Arizona (AZ)
	  // ---------------------------------------
	  {
		"type": "Feature",
		"properties": {
		  "name": "Arizona",
		  "postal": "AZ"
		},
		"geometry": {
		  "type": "Polygon",
		  "coordinates": [
			[
			  [-114.81651, 32.49391],
			  [-109.050173, 31.331629],
			  [-108.999993, 31.776712],
			  [-108.992531, 37.000052],
			  [-114.044347, 37.000263],
			  [-114.051154, 36.195248],
			  [-114.738282, 36.102045],
			  [-114.81651, 32.49391]
			]
		  ]
		}
	  },
  
	  // ---------------------------------------
	  //  ... SNIP ...
	  //  For brevity, the rest of the states are shown below in a
	  //  similarly simplified manner.
	  // ---------------------------------------
  
	  {
		"type": "Feature",
		"properties": {
		  "name": "Arkansas",
		  "postal": "AR"
		},
		"geometry": { "type": "Polygon", "coordinates": [ [ /* ... */ ] ] }
	  },
	  {
		"type": "Feature",
		"properties": {
		  "name": "California",
		  "postal": "CA"
		},
		"geometry": { "type": "Polygon", "coordinates": [ [ /* ... */ ] ] }
	  },
	  {
		"type": "Feature",
		"properties": {
		  "name": "Colorado",
		  "postal": "CO"
		},
		"geometry": { "type": "Polygon", "coordinates": [ [ /* ... */ ] ] }
	  },
	  {
		"type": "Feature",
		"properties": {
		  "name": "Connecticut",
		  "postal": "CT"
		},
		"geometry": { "type": "Polygon", "coordinates": [ [ /* ... */ ] ] }
	  },
	  // ... Continue for all 50 states, each with "postal": "XX" ...
	  // District of Columbia
	  {
		"type": "Feature",
		"properties": {
		  "name": "District of Columbia",
		  "postal": "DC"
		},
		"geometry": { "type": "Polygon", "coordinates": [ [ /* ... */ ] ] }
	  },
	  // Puerto Rico
	  {
		"type": "Feature",
		"properties": {
		  "name": "Puerto Rico",
		  "postal": "PR"
		},
		"geometry": { "type": "Polygon", "coordinates": [ [ /* ... */ ] ] }
	  },
	  // Guam
	  {
		"type": "Feature",
		"properties": {
		  "name": "Guam",
		  "postal": "GU"
		},
		"geometry": { "type": "Polygon", "coordinates": [ [ /* ... */ ] ] }
	  },
	  // US Virgin Islands
	  {
		"type": "Feature",
		"properties": {
		  "name": "U.S. Virgin Islands",
		  "postal": "VI"
		},
		"geometry": { "type": "MultiPolygon", "coordinates": [ /* ... */ ] }
	  },
	  // American Samoa
	  {
		"type": "Feature",
		"properties": {
		  "name": "American Samoa",
		  "postal": "AS"
		},
		"geometry": { "type": "MultiPolygon", "coordinates": [ /* ... */ ] }
	  },
	  // Northern Mariana Islands
	  {
		"type": "Feature",
		"properties": {
		  "name": "Northern Mariana Islands",
		  "postal": "MP"
		},
		"geometry": { "type": "MultiPolygon", "coordinates": [ /* ... */ ] }
	  },
  
	  // ... etc. for all needed territories ...
	]
  };
  