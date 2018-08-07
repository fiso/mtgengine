"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cremate extends UnimplementedCard {
  constructor (game) {
    super(game, "Cremate", "Return to Ravnica", "RTR");
  }
}

module.exports = Cremate;
