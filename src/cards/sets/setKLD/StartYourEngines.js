"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StartYourEngines extends UnimplementedCard {
  constructor (game) {
    super(game, "Start Your Engines", "Kaladesh", "KLD");
  }
}

module.exports = StartYourEngines;
