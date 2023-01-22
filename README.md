# [Library for Google Apps Script] Fetch JSON

## Using the Library

There are two ways to import the library to your project:

- Set in your script project dashboard
- Add the configuration into your `appsscript.json`

1. Script Id:

```
1VwgEzQRhb6igER9A5Jd_yXHaTBUG1tEBXxt6_W5UudkyUAeFT9T0vY_N
```

2. Add the latest version: for example, `2`
3. Use the identifier `FetchJson`

These actions will update your `appsscript.json`.

Or, you can update it directly adding to the `dependencies` object:

```json
"dependencies": {
    "libraries": [
      {
        "userSymbol": "FetchJson",
        "version": "3",
        "libraryId": "1VwgEzQRhb6igER9A5Jd_yXHaTBUG1tEBXxt6_W5UudkyUAeFT9T0vY_N"
      }
    ]
}
```

> The script runs in the timezone `Etc/GMT`.

## FetchJson

## Options

Required: `headers`
Optional: `verbose`, where the default value is `false`

Example:

```javascript
const options = {
  headers: {},
  verbose: true,
};
```

## Methods

### Get

```javascript
const response = FetchJson.Get(url, options);
```

### Post

The `payload` is a JSON object.

```javascript
const response = FetchJson.Post(url, payload, options);
```

### Put

```javascript
const response = FetchJson.Put(url, payload, options);
```

### Remove

```javascript
const response = FetchJson.Remove(url, options);
```

## Logging

Use the `option` parameter `verbose`set to `true` to enable logging.

## Tests

This library has been tested along with the library [Asaas Payment API.](https://github.com/danielfcollier/js-gas-library-asaas-payment-api)
