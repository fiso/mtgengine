'use strict';
const Constants = require('../../../Constants');
const UrzasBaubleBase = require('../setMED/UrzasBauble');

class UrzasBauble extends UrzasBaubleBase {
  constructor (game) {
    super(game, "Urza's Bauble", 'Fifth Edition', '5ED');
  }
}

module.exports = UrzasBauble;
