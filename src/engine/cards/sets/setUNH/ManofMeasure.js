"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManofMeasure extends UnimplementedCard {
  constructor (game) {
    super(game, "Man of Measure", "Unhinged", "UNH");
  }
}

module.exports = ManofMeasure;
