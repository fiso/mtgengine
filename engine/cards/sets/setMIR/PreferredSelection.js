"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PreferredSelection extends UnimplementedCard {
  constructor(game) {
    super(game, "Preferred Selection", "Mirage", "MIR");
  }
}

module.exports = PreferredSelection;
