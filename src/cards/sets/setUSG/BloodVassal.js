"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodVassal extends UnimplementedCard {
  constructor(game) {
    super(game, "Blood Vassal", "Urza's Saga", "USG");
  }
}

module.exports = BloodVassal;
