"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarnessedLightning extends UnimplementedCard {
  constructor (game) {
    super(game, "Harnessed Lightning", "Kaladesh", "KLD");
  }
}

module.exports = HarnessedLightning;
