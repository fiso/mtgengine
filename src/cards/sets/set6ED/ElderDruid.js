"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElderDruid extends UnimplementedCard {
  constructor(game) {
    super(game, "Elder Druid", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ElderDruid;
