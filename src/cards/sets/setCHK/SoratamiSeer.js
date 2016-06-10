"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoratamiSeer extends UnimplementedCard {
  constructor (game) {
    super(game, "Soratami Seer", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SoratamiSeer;
