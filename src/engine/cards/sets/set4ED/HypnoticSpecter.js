'use strict';
const Constants = require('../../../Constants');
const HypnoticSpecterBase = require('../setM10/HypnoticSpecter');

class HypnoticSpecter extends HypnoticSpecterBase {
  constructor (game) {
    super(game, 'Hypnotic Specter', 'Fourth Edition', '4ED');
  }
}

module.exports = HypnoticSpecter;
