"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VaultoftheArchangelBase = require("../setDKA/VaultoftheArchangel.js");

class VaultoftheArchangel extends VaultoftheArchangelBase {
  constructor(game) {
    super(game, "Vault of the Archangel", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = VaultoftheArchangel;
