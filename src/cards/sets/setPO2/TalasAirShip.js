"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalasAirShip extends UnimplementedCard {
  constructor(game) {
    super(game, "Talas Air Ship", "Portal Second Age", "PO2");
  }
}

module.exports = TalasAirShip;
