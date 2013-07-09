var BEM = require('bem'),
    environ = require('bem-environ');

exports.baseLevelPath = require.resolve('../../.bem/levels/bundles.js');

exports.getConfig = function() {

    return BEM.util.extend(this.__base() || {}, {

        bundleBuildLevels : [
                'blocks-common',
                'blocks-desktop'
            ]
            .map(function(path) {
                return environ.getLibPath('bem-bl', path);
            })
            .concat(this.resolvePaths([
                '../../common.blocks',
                '../../desktop.blocks'
            ]))

    });

};
