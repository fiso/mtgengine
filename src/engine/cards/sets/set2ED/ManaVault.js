'use strict';
const Constants = require('../../../Constants');
const ManaVaultBase = require('../setMPS/ManaVault');

class ManaVault extends ManaVaultBase {
  constructor (game) {
    super(game, 'Mana Vault', 'Unlimited Edition', '2ED');
  }
}

module.exports = ManaVault;
