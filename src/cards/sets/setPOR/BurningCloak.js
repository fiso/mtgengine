"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurningCloak extends UnimplementedCard {
  constructor(game) {
    super(game, "Burning Cloak", "Portal", "POR");
  }
}

module.exports = BurningCloak;
