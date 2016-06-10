"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodfireKavu extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodfire Kavu", "Apocalypse", "APC");
  }
}

module.exports = BloodfireKavu;
