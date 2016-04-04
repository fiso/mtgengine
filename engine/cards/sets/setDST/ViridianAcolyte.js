"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ViridianAcolyte extends Card {
  constructor(game) {
    super(game, "Viridian Acolyte", "Darksteel", "DST");
  }
}

module.exports = ViridianAcolyte;
