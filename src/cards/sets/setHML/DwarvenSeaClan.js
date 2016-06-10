"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenSeaClan extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Sea Clan", "Homelands", "HML");
  }
}

module.exports = DwarvenSeaClan;
