#!/usr/bin/env python
# -*- coding: utf-8 -*-

import csv, json

csvFilePath = 'geotargets-2020-01-30.csv'
jsonFilePath = 'us_cities.json'

data = {}
with open(csvFilePath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    maxId = 0
    for rows in csvReader:
        if rows['Country Code'] == 'US':
            #  id = rows['Criteria ID']
            city = rows['Name']
            try:
                float(city)
            except ValueError:
                state = rows['Canonical Name'].split(",")
                state = state[len(state)-2]
                if state in data:
                    copy = data[state][:]
                    copy = copy + [city]
                    data[state] = copy
                else:
                    data[state] = [city]
            #  data[id] = rows


with open(jsonFilePath, 'w') as jsonFile:
    jsonFile.write(json.dumps(data, indent=4))

