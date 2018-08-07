"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoratamiSavant extends UnimplementedCard {
  constructor (game) {
    super(game, "Soratami Savant", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SoratamiSavant;
