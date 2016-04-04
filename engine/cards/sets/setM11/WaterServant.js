"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WaterServant extends Card {
  constructor(game) {
    super(game, "Water Servant", "Magic 2011", "M11");
  }
}

module.exports = WaterServant;
