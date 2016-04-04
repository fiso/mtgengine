"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodfireInfusion extends Card {
  constructor(game) {
    super(game, "Bloodfire Infusion", "Apocalypse", "APC");
  }
}

module.exports = BloodfireInfusion;
