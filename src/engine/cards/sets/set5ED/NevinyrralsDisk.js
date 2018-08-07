'use strict';
const Constants = require('../../../Constants');
const NevinyrralsDiskBase = require('../setC17/NevinyrralsDisk');

class NevinyrralsDisk extends NevinyrralsDiskBase {
  constructor (game) {
    super(game, "Nevinyrral's Disk", 'Fifth Edition', '5ED');
  }
}

module.exports = NevinyrralsDisk;
