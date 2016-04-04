"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeBomb extends UnimplementedCard {
  constructor(game) {
    super(game, "Time Bomb", "Fifth Edition", "5ED");
  }
}

module.exports = TimeBomb;
