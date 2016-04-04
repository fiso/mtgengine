"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TravelingPhilosopher extends Card {
  constructor(game) {
    super(game, "Traveling Philosopher", "Theros", "THS");
  }
}

module.exports = TravelingPhilosopher;
