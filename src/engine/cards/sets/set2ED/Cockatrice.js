'use strict';
const Constants = require('../../../Constants');
const CockatriceBase = require('../setTSB/Cockatrice');

class Cockatrice extends CockatriceBase {
  constructor (game) {
    super(game, 'Cockatrice', 'Unlimited Edition', '2ED');
  }
}

module.exports = Cockatrice;
