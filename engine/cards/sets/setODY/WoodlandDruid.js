"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WoodlandDruid extends Card {
  constructor(game) {
    super(game, "Woodland Druid", "Odyssey", "ODY");
  }
}

module.exports = WoodlandDruid;
