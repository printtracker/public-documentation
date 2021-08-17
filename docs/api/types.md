## Entity

```json
{
  "id": "000000000000000000000002",
  "name": "My Company",
  "genealogy": [
    "000000000000000000000000",
    "000000000000000000000001"
  ],
  "addresses": [
    {
      "name": "My Address",
      "type": "main",
      "address1": "1234 State St.",
      "address2": "Suite A",
      "city": "Manhantten",
      "stateOrProvince": "New York",
      "zipOrPostalCode": "10004",
      "country": "US"
    }
  ],
  "children": [
    {
      "name": "Another child",
      "id": "000000000000000000000003"
    }
  ]
}
```

## Device

```json
{
  "id": "0000000000000000000000003",
  "createdDate": "2021-01-01T01:44:44.000Z",
  "modifiedDate": "2021-03-01T01:44:44.000Z",
  "entityKey": "0000000000000000000000001",
  "installKeys": [
    "0000000000000000000000002"
  ],
  "make": "HP",
  "model": "LaserJet 2430",
  "serialNumber": "CNDQQ05142",
  "ipAddress": "10.0.0.5",
  "macAddress": "00-60-d1-4d-e1-5f",
  "location": "FRONT-DESK",
  "customLocation": "Front Desk",
  "assetID": "ABC123",
  "note": "Keep an eye on this one...",
  "isLocal": false,
  "firmware": {
    "device": "FW-101.v10.1.10"
  }
}
```

## Meter Read

```json
{
  "id": "000000000000000000000000",
  "createdDate": "2021-01-12T23:29:06.883Z",
  "modifiedDate": "2021-01-12T23:29:06.883Z",
  "entityKey": "000000000000000000000001",
  "installKey": "000000000000000000000002",
  "deviceKey": "000000000000000000000003",
  "timestamp": "2021-01-12T23:29:06.644Z",
  "pageCounts": {
    "default": {
      "total": {
        "displayName": "Total",
        "value": "350"
      },
      "totalBlack": {
        "displayName": "Total Black",
        "value": "150"
      },
      "totalColor": {
        "displayName": "Total Color",
        "value": "100"
      }
    },
    "life": {
      "total": {
        "displayName": "Total",
        "value": "350"
      },
      "totalBlack": {
        "displayName": "Total Black",
        "value": "150"
      },
      "totalColor": {
        "displayName": "Total Color",
        "value": "100"
      }
    }
  },
  "supplies": {
    "blackInk": {
      "color": {
        "displayName": "Color",
        "value": "Black"
      },
      "type": {
        "displayName": "Type",
        "value": "Ink"
      },
      "displayableName": {
        "displayName": "Color",
        "value": "Ink"
      },
      "pctRemaining": {
        "displayName": "Percent Remaining",
        "value": "50"
      }
    }
  }
}
```
