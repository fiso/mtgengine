"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoxDiamond extends UnimplementedCard {
  constructor (game) {
    super(game, "Mox Diamond", "From the Vault: Relics", "V10");
  }
}

module.exports = MoxDiamond;
