"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KioraMasteroftheDepths extends UnimplementedCard {
  constructor(game) {
    super(game, "Kiora, Master of the Depths", "Battle for Zendikar", "BFZ");
  }
}

module.exports = KioraMasteroftheDepths;
