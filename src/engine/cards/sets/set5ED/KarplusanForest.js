'use strict';
const Constants = require('../../../Constants');
const KarplusanForestBase = require('../setC16/KarplusanForest');

class KarplusanForest extends KarplusanForestBase {
  constructor (game) {
    super(game, 'Karplusan Forest', 'Fifth Edition', '5ED');
  }
}

module.exports = KarplusanForest;
