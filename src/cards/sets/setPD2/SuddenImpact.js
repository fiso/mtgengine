"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuddenImpact extends UnimplementedCard {
  constructor (game) {
    super(game, "Sudden Impact", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = SuddenImpact;
