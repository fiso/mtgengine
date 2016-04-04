"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkycloudEgg extends Card {
  constructor(game) {
    super(game, "Skycloud Egg", "Odyssey", "ODY");
  }
}

module.exports = SkycloudEgg;
