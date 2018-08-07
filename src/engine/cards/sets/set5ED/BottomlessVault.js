'use strict';
const Constants = require('../../../Constants');
const UnimplementedCard = require('../../UnimplementedCard');

class BottomlessVault extends UnimplementedCard {
  constructor (game) {
    super(game, 'Bottomless Vault', 'Fifth Edition', '5ED');
  }
}

module.exports = BottomlessVault;
