"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DetainmentSpell extends UnimplementedCard {
  constructor(game) {
    super(game, "Detainment Spell", "Time Spiral", "TSP");
  }
}

module.exports = DetainmentSpell;
