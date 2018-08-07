'use strict';
const Constants = require('../../../Constants');
const SylvokExplorerBase = require('../setC16/SylvokExplorer');

class SylvokExplorer extends SylvokExplorerBase {
  constructor (game) {
    super(game, 'Sylvok Explorer', 'Fifth Dawn', '5DN');
  }
}

module.exports = SylvokExplorer;
