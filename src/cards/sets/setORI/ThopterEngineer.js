"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThopterEngineer extends UnimplementedCard {
  constructor (game) {
    super(game, "Thopter Engineer", "Magic Origins", "ORI");
  }
}

module.exports = ThopterEngineer;
