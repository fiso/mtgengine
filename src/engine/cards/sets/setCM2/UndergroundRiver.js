"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndergroundRiver extends UnimplementedCard {
  constructor (game) {
    super(game, "Underground River", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = UndergroundRiver;
