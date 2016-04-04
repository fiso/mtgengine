"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SungrassEgg extends Card {
  constructor(game) {
    super(game, "Sungrass Egg", "Odyssey", "ODY");
  }
}

module.exports = SungrassEgg;
