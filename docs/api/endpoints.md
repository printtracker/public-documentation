## `GET` Get Entity

**`GET`** `https://papi.printtrackerpro.com/v1/entity/:entityID`

Returns an entity object for the provided entity ID.

=== "Request"

    === "Parameters"

        **Path Parameters**
        
        - `entityID` `string` - The ID of the entity
    
        **Headers**
    
        - `x-api-key` - Your Print Tracker API key
    
        **Query Parameters**
    
        - `includeChildren` `boolean` _optional_ - Whether the resulting entity should contain an array of children entity names and IDs at every hierarchical level under Print Tracker. This is useful for traversing entity hierarchy.
    
    === "cURL"

        ```shell
        $ curl --request GET 'https://papi.printtrackerpro.com/v1/entity/<ENTITY-ID-HERE>?includeChildren=true' --header 'x-api-key: <API-KEY-HERE>'
        ```

=== "Response"

    [Entity](types.md#entity)

---

## `GET` Get Devices by Entity

**`GET`** `https://papi.printtrackerpro.com/v1/entity/:entityID/device`

Returns an array of devices that belong to the specified entity and (optionally) its children.

=== "Request"

    === "Parameters"

        **Path Parameters**
        
        - `entityID` `string` - The ID of the entity
    
        **Headers**
    
        - `x-api-key` - Your Print Tracker API key
    
        **Query Parameters**
    
        - `includeChildren` `boolean` _optional_ - Defaults to false, determines whether we should return devices at the provided `entityID` and all children entities or just the provided `entityID`.
        - `limit` `number` _optional_ - Defaults to 100, determines the maximum number of devices in the response array.
        - `page` `number` _optional_ - Defaults to 1, determines the paginator's current page for the request.
    
    === "cURL"

        ```shell
        $ curl --request GET 'https://papi.printtrackerpro.com/v1/entity/<ENTITY-ID-HERE>/device?limit=100&page=1&includeChildren=true' --header 'x-api-key: <API-KEY-HERE>'
        ```

=== "Response"

    An array of [Device](types.md#device) objects

---

## `GET` Get Meters by Entity

**`GET`** `https://papi.printtrackerpro.com/v1/entity/:entityID/meter`

Returns an array of meter reads for the specified entity.

=== "Request"

    === "Parameters"

        **Path Parameters**
        
        - `entityID` `string` - The ID of the entity
    
        **Headers**
    
        - `x-api-key` - Your Print Tracker API key
    
        **Query Parameters**
    
        - `start` `date` - The start of the meter read date range formatted as RFC3339, ISO8601 (without timezone), RFC1123Z, RFC1123, RFC1123, RFC822Z, RFC822, RFC8250, ANSIC, or Unix.
        - `end` `date` - The end of the meter read date range formatted as RFC3339, ISO8601 (without timezone), RFC1123Z, RFC1123, RFC1123, RFC822Z, RFC822, RFC8250, ANSIC, or Unix.
    
    === "cURL"

        ```shell
        $ curl --location --request GET 'https://papi.printtrackerpro.com/v1/entity/<ENTITY-ID-HERE>/meter?start=2020-12-18T17:52:52.417Z&end=2021-01-25T17:52:52.417Z' --header 'x-api-key: <API-KEY-HERE>'
        ```

=== "Response"

    An array of [Meter Read](types.md#meter-read) objects

## `GET` Get Current Meters by Entity

**`GET`** `https://papi.printtrackerpro.com/v1/entity/:entityID/currentMeter`

Returns an array of current meter reads for all devices at the specified entity. If `includeChildren` is enabled and provided in the query string, this endpoint will return the current meter reads for all devices at the provided entity and any children of the provided entity. This endpoint is paginated, and the caller should pass a page and limit to paginate all the results from the endpoint.

=== "Request"

    === "Parameters"

        **Path Parameters**
        
        - `entityID` `string` - The ID of the entity
    
        **Headers**
    
        - `x-api-key` - Your Print Tracker API key
    
        **Query Parameters**
    
        - `includeChildren` `bool` - Whether the response should include current meters from devices at children of this entity.
        - `page` `int` - The pagination page that you want to return data for.
        - `limit` `int` - The number of results in the pagination page. If the number of results is less than the limit, then you know you've retrieved all available meter reads.
    
    === "cURL"

        ```shell
        $ curl --location --request GET 'localhost:8080/v1/entity/<ENTITY-ID-HERE>/currentMeter?includeChildren=true&page=1&limit=100' --header 'x-api-key: <API-KEY-HERE>'
        ```

=== "Response"

    An array of [Meter Read](types.md#meter-read) objects

---

## `GET` Get Meters by Device

**`GET`** `https://papi.printtrackerpro.com/v1/entity/:entityID/device/:deviceID/meter`

Returns an array of meter reads for the specified device.

=== "Request"

    === "Parameters"

        **Path Parameters**
        
        - `entityID` `string` - The ID of the entity
        - `deviceID` `string` - The ID of the device
    
        **Headers**
    
        - `x-api-key` - Your Print Tracker API key
    
        **Query Parameters**
    
        - `start` `date` - The start of the meter read date range formatted as RFC3339, ISO8601 (without timezone), RFC1123Z, RFC1123, RFC1123, RFC822Z, RFC822, RFC8250, ANSIC, or Unix.
        - `end` `date` - The end of the meter read date range formatted as RFC3339, ISO8601 (without timezone), RFC1123Z, RFC1123, RFC1123, RFC822Z, RFC822, RFC8250, ANSIC, or Unix.
    
    === "cURL"

        ```shell
        $ curl --location --request GET 'https://papi.printtrackerpro.com/v1/entity/<ENTITY-ID-HERE>/device/<DEVICE-ID-HERE>/meter?start=2021-01-08T17:52:52.417Z&end=2021-01-25T17:52:52.417Z' --header 'x-api-key: <API-KEY-HERE>'
        ```

=== "Response"

    An array of [Meter Read](types.md#meter-read) objects

---

## `GET` Get Meter Immediately Prior to Date

**`GET`** `https://papi.printtrackerpro.com/v1/entity/:entityID/device/:deviceID/meter/mostRecentPriorTo`

Returns the meter read for a device that is closest to, but not after the provided `date` query parameter.

=== "Request"

    === "Parameters"

        **Path Parameters**
        
        - `entityID` `string` - The ID of the entity
        - `deviceID` `string` - The ID of the device
    
        **Headers**
    
        - `x-api-key` - Your Print Tracker API key
    
        **Query Parameters**
    
        - `date` `date` - The meter read returned will be the most recent meter read that occurred before this date, formatted as RFC3339, ISO8601 (without timezone), RFC1123Z, RFC1123, RFC1123, RFC822Z, RFC822, RFC8250, ANSIC, or Unix.
    
    === "cURL"

        ```shell
        $ curl --location --request GET 'https://www.papi.printtrackerpro.com/v1/entity/<ENTITY-ID-HERE>/device/<DEVICE-ID-HERE>/meter/mostRecentPriorTo?date=2021-07-01T17:52:52.417Z' --header 'x-api-key: <API-KEY-HERE>'
        ```

=== "Response"

    A sinlge [Meter Read](types.md#meter-read) object
