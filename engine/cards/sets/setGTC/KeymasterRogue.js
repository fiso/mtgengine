"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KeymasterRogue extends Card {
  constructor(game) {
    super(game, "Keymaster Rogue", "Gatecrash", "GTC");
  }
}

module.exports = KeymasterRogue;
