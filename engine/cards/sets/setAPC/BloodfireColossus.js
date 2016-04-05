"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodfireColossus extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodfire Colossus", "Apocalypse", "APC");
  }
}

module.exports = BloodfireColossus;
