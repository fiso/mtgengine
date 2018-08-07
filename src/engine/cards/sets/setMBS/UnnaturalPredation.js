"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnnaturalPredation extends UnimplementedCard {
  constructor (game) {
    super(game, "Unnatural Predation", "Mirrodin Besieged", "MBS");
  }
}

module.exports = UnnaturalPredation;
