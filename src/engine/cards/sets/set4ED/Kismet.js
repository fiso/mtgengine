'use strict';
const Constants = require('../../../Constants');
const KismetBase = require('../setME4/Kismet');

class Kismet extends KismetBase {
  constructor (game) {
    super(game, 'Kismet', 'Fourth Edition', '4ED');
  }
}

module.exports = Kismet;
