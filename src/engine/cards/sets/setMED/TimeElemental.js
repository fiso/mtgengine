"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Time Elemental", "Masters Edition", "MED");
  }
}

module.exports = TimeElemental;
