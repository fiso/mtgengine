"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JestersCap extends UnimplementedCard {
  constructor (game) {
    super(game, "Jester's Cap", "From the Vault: Relics", "V10");
  }
}

module.exports = JestersCap;
