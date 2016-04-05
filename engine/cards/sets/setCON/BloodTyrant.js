"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodTyrant extends UnimplementedCard {
  constructor(game) {
    super(game, "Blood Tyrant", "Conflux", "CON");
  }
}

module.exports = BloodTyrant;
