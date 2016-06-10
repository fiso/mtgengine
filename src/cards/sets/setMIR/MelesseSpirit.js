"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MelesseSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Melesse Spirit", "Mirage", "MIR");
  }
}

module.exports = MelesseSpirit;
