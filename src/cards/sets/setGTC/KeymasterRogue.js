"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeymasterRogue extends UnimplementedCard {
  constructor (game) {
    super(game, "Keymaster Rogue", "Gatecrash", "GTC");
  }
}

module.exports = KeymasterRogue;
