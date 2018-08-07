"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThopterEngineer extends UnimplementedCard {
  constructor (game) {
    super(game, "Thopter Engineer", "Commander 2018", "C18");
  }
}

module.exports = ThopterEngineer;
