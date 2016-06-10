"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefensiveFormation extends UnimplementedCard {
  constructor (game) {
    super(game, "Defensive Formation", "Urza's Saga", "USG");
  }
}

module.exports = DefensiveFormation;
