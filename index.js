const IncomingMessage = require('http').IncomingMessage

const Plugin = module.parent.require('../Structures/Plugin');
function insertSpaces(aString) {
    return aString.split("").join(" ");
  }

class Vaporwave extends Plugin {
    constructor(...args) {
        super(...args);

        this.registerCommand({
            name: 'vaporwave',
            info: 'Make text v a p o r w a v e',
            usag: '<text>',
            func: (args) => {
                const selectedChannel = window.DI.client.selectedChannel
                selectedChannel.send(insertSpaces(args.join(" ")));
            }
        });
    }
}

module.exports = Vaporwave;
