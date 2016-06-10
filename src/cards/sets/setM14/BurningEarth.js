"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurningEarth extends UnimplementedCard {
  constructor (game) {
    super(game, "Burning Earth", "Magic 2014 Core Set", "M14");
  }
}

module.exports = BurningEarth;
