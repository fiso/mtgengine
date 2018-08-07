"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Skyscanner extends UnimplementedCard {
  constructor (game) {
    super(game, "Skyscanner", "Core Set 2019", "M19");
  }
}

module.exports = Skyscanner;
