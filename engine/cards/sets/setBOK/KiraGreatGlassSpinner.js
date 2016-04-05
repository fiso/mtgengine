"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KiraGreatGlassSpinner extends UnimplementedCard {
  constructor(game) {
    super(game, "Kira, Great Glass-Spinner", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = KiraGreatGlassSpinner;
