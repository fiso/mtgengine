'use strict';
const Constants = require('../../../Constants');
const ZursWeirdingBase = require('../set9ED/ZursWeirding');

class ZursWeirding extends ZursWeirdingBase {
  constructor (game) {
    super(game, "Zur's Weirding", 'Fifth Edition', '5ED');
  }
}

module.exports = ZursWeirding;
