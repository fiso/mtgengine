"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RockslideElemental extends Card {
  constructor(game) {
    super(game, "Rockslide Elemental", "Planechase", "HOP");
  }
}

module.exports = RockslideElemental;
