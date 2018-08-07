"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElderDruid extends UnimplementedCard {
  constructor (game) {
    super(game, "Elder Druid", "Seventh Edition", "7ED");
  }
}

module.exports = ElderDruid;
