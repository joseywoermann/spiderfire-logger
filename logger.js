const defaultColors = {
    DEBUG: "#9DD1BA",
    INFO: "#BAD755",
    WARN: "#FDD662",
    ERROR: "#FD647A",
};

const RESET = "\u001b[0m";
const WHITE = "\u001b[38;2;255;255;255m";

function hexToRGB(hexColor) {
    if (hexColor.toString()[0] == "#") {
        hexColor = hexColor.toString();
        var r = parseInt(hexColor.substring(1, 3), 16);
        var g = parseInt(hexColor.substring(3, 5), 16);
        var b = parseInt(hexColor.substring(5, 7), 16);
    }
    return `\u001b[38;2;${r};${g};${b}m`;
}

/**
 * A Logger
 */
export default class Logger {
    timezone;
    config = {
        colors: defaultColors,
    };

    /**
     * Create a new Logger instance with a given time zone setting.
     * @param timezone Either `"UTC"` or `"local"`. This decides whether to use the local timezone or UTC as the time.
     * @param config Additional settings like custom colors.
     */
    constructor(timezone, config) {
        this.timezone = timezone;
        this.config = config ?? this.config;
    }

    /**
     * Logs a debug message to the console.
     * @param messages
     */
    debug = (...messages) => {
        console.log(
            `${RESET}${this.time()} ${hexToRGB(this.config.colors.DEBUG)}[DEBUG]${RESET}`,
            ...messages
        );
    };

    /**
     * Logs an info message to the console.
     * @param messages
     */
    info = (...messages) => {
        console.log(
            `${RESET}${this.time()} ${hexToRGB(this.config.colors.INFO)}[INFO] ${RESET}`,
            ...messages
        );
    };

    /**
     * Logs a warning to the console.
     * @param messages
     */
    warn = (...messages) => {
        console.log(
            `${RESET}${this.time()} ${hexToRGB(this.config.colors.WARN)}[WARN] ${RESET}`,
            ...messages
        );
    };

    /**
     * Logs an error to the console.
     * @param messages
     */
    error = (...messages) => {
        console.log(
            `${RESET}${this.time()} ${hexToRGB(this.config.colors.ERROR)}[ERROR]${RESET}`,
            ...messages
        );
    };

    /**
     * An internal helper method that returns a formatted string with time and date according to the user's time zone preference.
     * @returns
     */
    time = () => {
        const now = new Date();
        if (this.timezone === "UTC") {
            return `[${now.getUTCFullYear()}-${this.format(now.getUTCMonth() + 1)}-${this.format(
                now.getUTCDate()
            )}] [${this.format(now.getUTCHours())}:${this.format(now.getUTCMinutes())}:${this.format(
                now.getUTCSeconds()
            )}]`;
        } else {
            return `[${now.getFullYear()}-${this.format(now.getMonth() + 1)}-${this.format(
                now.getDate()
            )}] [${this.format(now.getHours())}:${this.format(now.getMinutes())}:${this.format(
                now.getSeconds()
            )}]`;
        }
    };

    /**
     * We want our values to always be double-digit (except for year), this internal helper function guarantees that.
     * @param date
     * @returns
     */
    format = (date) => {
        if (typeof date === "number") {
            date = date.toString();
        }
        return date.length === 1 ? `0${date}` : date;
    };
}
