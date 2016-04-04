"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnnaturalPredation extends Card {
  constructor(game) {
    super(game, "Unnatural Predation", "Mirrodin Besieged", "MBS");
  }
}

module.exports = UnnaturalPredation;
