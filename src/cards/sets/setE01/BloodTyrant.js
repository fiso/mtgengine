"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodTyrant extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Tyrant", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = BloodTyrant;
