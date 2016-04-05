"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerashisVerdict extends UnimplementedCard {
  constructor(game) {
    super(game, "Terashi's Verdict", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = TerashisVerdict;
