"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StewardofSolidarity extends UnimplementedCard {
  constructor (game) {
    super(game, "Steward of Solidarity", "Hour of Devastation", "HOU");
  }
}

module.exports = StewardofSolidarity;
