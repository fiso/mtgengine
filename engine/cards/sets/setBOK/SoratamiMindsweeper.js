"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoratamiMindsweeper extends UnimplementedCard {
  constructor(game) {
    super(game, "Soratami Mindsweeper", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = SoratamiMindsweeper;
