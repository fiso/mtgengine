"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fatespinner extends UnimplementedCard {
  constructor(game) {
    super(game, "Fatespinner", "Mirrodin", "MRD");
  }
}

module.exports = Fatespinner;
