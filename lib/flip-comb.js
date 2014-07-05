var Core = require('csscomb-core');
var fs = require('fs');

/**
 * @param {Object} [config]
 * @constructor
 */
var FlipComb = function(config) {
    // All options from `lib/options` directory will be used.
    var options = fs.readdirSync('./lib/options').map(function(option) {
        return require('./options/' + option);
    });

    // List syntaxes that your tool will support.
    // For example: `new Core(options, 'css', 'less', 'sass', 'scss')`.
    var core = new Core(options, 'css');

    // If config is passed to constructor, new instance will be configured.
    if (typeof config === 'object') {
        core.configure(config);
    }

    return core;
}

module.exports = FlipComb;
