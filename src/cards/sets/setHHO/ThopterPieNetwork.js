"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThopterPieNetwork extends UnimplementedCard {
  constructor (game) {
    super(game, "Thopter Pie Network", "Happy Holidays", "HHO");
  }
}

module.exports = ThopterPieNetwork;
