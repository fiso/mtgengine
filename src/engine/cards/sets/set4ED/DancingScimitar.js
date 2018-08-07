'use strict';
const Constants = require('../../../Constants');
const DancingScimitarBase = require('../set9ED/DancingScimitar');

class DancingScimitar extends DancingScimitarBase {
  constructor (game) {
    super(game, 'Dancing Scimitar', 'Fourth Edition', '4ED');
  }
}

module.exports = DancingScimitar;
