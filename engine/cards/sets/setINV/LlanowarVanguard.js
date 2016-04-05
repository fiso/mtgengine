"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LlanowarVanguard extends UnimplementedCard {
  constructor(game) {
    super(game, "Llanowar Vanguard", "Invasion", "INV");
  }
}

module.exports = LlanowarVanguard;
