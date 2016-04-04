"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LavaStorm extends Card {
  constructor(game) {
    super(game, "Lava Storm", "Weatherlight", "WTH");
  }
}

module.exports = LavaStorm;
