"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodlandDruid extends UnimplementedCard {
  constructor (game) {
    super(game, "Woodland Druid", "Odyssey", "ODY");
  }
}

module.exports = WoodlandDruid;
