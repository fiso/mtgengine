"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CurtainsCall extends UnimplementedCard {
  constructor (game) {
    super(game, "Curtains' Call", "Commander 2016", "C16");
  }
}

module.exports = CurtainsCall;
