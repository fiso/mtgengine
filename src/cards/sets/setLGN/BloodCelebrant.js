"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodCelebrant extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Celebrant", "Legions", "LGN");
  }
}

module.exports = BloodCelebrant;
