'use strict';
const Constants = require('../../../Constants');
const ZombieMasterBase = require('../setME4/ZombieMaster');

class ZombieMaster extends ZombieMasterBase {
  constructor (game) {
    super(game, 'Zombie Master', 'Fourth Edition', '4ED');
  }
}

module.exports = ZombieMaster;
