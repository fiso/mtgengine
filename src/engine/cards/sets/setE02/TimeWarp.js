"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeWarp extends UnimplementedCard {
  constructor (game) {
    super(game, "Time Warp", "Explorers of Ixalan", "E02");
  }
}

module.exports = TimeWarp;
