"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Time Elemental", "Fifth Edition", "5ED");
  }
}

module.exports = TimeElemental;
