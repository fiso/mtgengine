"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenLandslide extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Landslide", "Apocalypse", "APC");
  }
}

module.exports = DwarvenLandslide;
