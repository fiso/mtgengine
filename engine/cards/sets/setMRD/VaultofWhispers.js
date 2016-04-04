"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VaultofWhispers extends Card {
  constructor(game) {
    super(game, "Vault of Whispers", "Mirrodin", "MRD");
  }
}

module.exports = VaultofWhispers;
