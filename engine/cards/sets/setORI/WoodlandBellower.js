"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WoodlandBellower extends Card {
  constructor(game) {
    super(game, "Woodland Bellower", "Magic Origins", "ORI");
  }
}

module.exports = WoodlandBellower;
