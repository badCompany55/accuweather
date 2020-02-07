#!/usr/bin/env python
# -*- coding: utf-8 -*-

import requests
import json

key = "I8x3NISJGnGnxm1R9NuBQa5GrKGDUTGz"
res = requests.get(f"http://dataservice.accuweather.com/forecasts/v1/daily/5day/331128?apikey={key}")
#  print(res.json())

with open('tempdata.json', 'w') as jsonFile:
    json.dump(res.json(), jsonFile)
