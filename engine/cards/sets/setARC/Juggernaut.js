"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Juggernaut extends UnimplementedCard {
  constructor(game) {
    super(game, "Juggernaut", "Archenemy", "ARC");
  }
}

module.exports = Juggernaut;
