"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThopterFoundry extends UnimplementedCard {
  constructor (game) {
    super(game, "Thopter Foundry", "Commander 2016", "C16");
  }
}

module.exports = ThopterFoundry;
