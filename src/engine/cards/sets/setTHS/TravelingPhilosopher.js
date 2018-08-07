"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TravelingPhilosopher extends UnimplementedCard {
  constructor (game) {
    super(game, "Traveling Philosopher", "Theros", "THS");
  }
}

module.exports = TravelingPhilosopher;
