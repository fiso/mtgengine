'use strict';
const Constants = require('../../../Constants');
const KeldonWarlordBase = require('../setMED/KeldonWarlord');

class KeldonWarlord extends KeldonWarlordBase {
  constructor (game) {
    super(game, 'Keldon Warlord', 'Fourth Edition', '4ED');
  }
}

module.exports = KeldonWarlord;
