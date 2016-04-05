"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sewerdreg extends UnimplementedCard {
  constructor(game) {
    super(game, "Sewerdreg", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Sewerdreg;
