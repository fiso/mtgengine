"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TsabosAssassin extends UnimplementedCard {
  constructor(game) {
    super(game, "Tsabo's Assassin", "Invasion", "INV");
  }
}

module.exports = TsabosAssassin;
