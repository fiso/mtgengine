"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BladeTribeBerserkers extends Card {
  constructor(game) {
    super(game, "Blade-Tribe Berserkers", "Scars of Mirrodin", "SOM");
  }
}

module.exports = BladeTribeBerserkers;
