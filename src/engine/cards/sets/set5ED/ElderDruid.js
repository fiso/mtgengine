'use strict';
const Constants = require('../../../Constants');
const ElderDruidBase = require('../set7ED/ElderDruid');

class ElderDruid extends ElderDruidBase {
  constructor (game) {
    super(game, 'Elder Druid', 'Fifth Edition', '5ED');
  }
}

module.exports = ElderDruid;
