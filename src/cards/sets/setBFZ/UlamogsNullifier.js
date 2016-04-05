"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UlamogsNullifier extends UnimplementedCard {
  constructor(game) {
    super(game, "Ulamog's Nullifier", "Battle for Zendikar", "BFZ");
  }
}

module.exports = UlamogsNullifier;
