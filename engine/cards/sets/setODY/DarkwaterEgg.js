"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarkwaterEgg extends Card {
  constructor(game) {
    super(game, "Darkwater Egg", "Odyssey", "ODY");
  }
}

module.exports = DarkwaterEgg;
