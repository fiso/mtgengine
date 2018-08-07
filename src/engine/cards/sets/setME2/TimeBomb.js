"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeBomb extends UnimplementedCard {
  constructor (game) {
    super(game, "Time Bomb", "Masters Edition II", "ME2");
  }
}

module.exports = TimeBomb;
