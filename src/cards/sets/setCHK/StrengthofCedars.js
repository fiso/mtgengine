"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrengthofCedars extends UnimplementedCard {
  constructor(game) {
    super(game, "Strength of Cedars", "Champions of Kamigawa", "CHK");
  }
}

module.exports = StrengthofCedars;
