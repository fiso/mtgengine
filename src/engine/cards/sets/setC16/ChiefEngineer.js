"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChiefEngineer extends UnimplementedCard {
  constructor (game) {
    super(game, "Chief Engineer", "Commander 2016", "C16");
  }
}

module.exports = ChiefEngineer;
