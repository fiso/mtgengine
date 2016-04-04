"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenLandslide extends Card {
  constructor(game) {
    super(game, "Dwarven Landslide", "Apocalypse", "APC");
  }
}

module.exports = DwarvenLandslide;
