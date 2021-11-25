# Yet another logging module

> This logging module is ported to [Spiderfire](https://github.com/Redfire75369/spiderfire/) from [`@josey/logger`](https://github.com/joseywoermann/logger).

### Disclaimer
At the moment, all logs will have [different colors depending on their data type](https://github.com/Redfire75369/spiderfire/issues/19). This is a known issue, but I haven't found a workaround yet.

## Install

Download the latest version from GitHub and add it to your project.

```sh
curl -O https://raw.githubusercontent.com/joseywoermann/spiderfire-logger/master/logger.js
```

## Examples

### Basic setup

```js
import Logger from "./logger.js";

const logger = new Logger("UTC");

logger.info("This is an example!");
```

### Advanced setup with custom colors & explicit types

```js
import Logger from "./logger.js";

const logger = new Logger("local", {
    colors: {
        DEBUG: "#9fa6a4",
        INFO: "#32a852",
        WARN: "#edb611",
        ERROR: "#ff0000",
    },
});

logger.debug("Hello", "there!");
logger.info(123456789);
logger.warn(false, "true");
logger.error(["a", "b", "c"]);
```

### Available methods

This module provides the following methods, to all which you can pass any number of arguments of any type.

```ts
Logger.debug<any>(...messages: any[]) => void
Logger.info<any>(...messages: any[]) => void
Logger.warn<any>(...messages: any[]) => void
Logger.error<any>(...messages: any[]) => void
```

### Configuration

it is possible to modify the loggers behaviour and appereance in the constructor.

The fist argument determines whether to use UTC or local time.
The second argument can be used to change the colors used to highlight the log level.

```ts
import Logger from "./logger.js";

// Either "UTC" or "local"
const logger = new Logger("local", {
    // Pass 4 hex-color string to change the color palette
    colors: {
        DEBUG: "#9fa6a4",
        INFO: "#32a852",
        WARN: "#edb611",
        ERROR: "#ff0000",
    },
});
```
