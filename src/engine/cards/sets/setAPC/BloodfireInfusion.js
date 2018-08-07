"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodfireInfusion extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodfire Infusion", "Apocalypse", "APC");
  }
}

module.exports = BloodfireInfusion;
