import { logger, fileAsyncTransport } from "react-native-logs";
import RNFS from 'react-native-fs';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';


const config = {
    transport: fileAsyncTransport,
    transportOptions: {
        FS: RNFS,
        fileName: `imp-roll-logs.txt`,
        filePath: RNFS.DownloadDirectoryPath
    },
};


var rnLogger = logger.createLogger(config);

const logWarning = (log) => {
    logToFile(log, 'warn')
}

const logDebug = (log) => {
    logToFile(log, 'debug')
}

const logFatal = (log) => {
    logToFile(log, 'fatal')
}

const logToFile = (log, type) => {
    if(global.settings == undefined || !global.settings.debugMode)
        return;

    check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then((status) => {
        if (status == RESULTS.GRANTED) {
            switch (type) {
                case 'warn':
                    rnLogger.warn(log)
                    break;
                case 'debug':
                    rnLogger.debug(log)
                    break;
                case 'fatal':
                    rnLogger.error(log)
                    break;
                default:
                    break;
            }
        }
    })
}

export { logWarning, logDebug, logFatal }