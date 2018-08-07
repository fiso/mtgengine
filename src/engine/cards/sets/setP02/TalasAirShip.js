"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalasAirShip extends UnimplementedCard {
  constructor (game) {
    super(game, "Talas Air Ship", "Portal Second Age", "P02");
  }
}

module.exports = TalasAirShip;
