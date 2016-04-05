"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodfireDwarf extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodfire Dwarf", "Apocalypse", "APC");
  }
}

module.exports = BloodfireDwarf;
