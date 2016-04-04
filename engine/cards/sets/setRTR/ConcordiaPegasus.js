"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConcordiaPegasus extends Card {
  constructor(game) {
    super(game, "Concordia Pegasus", "Return to Ravnica", "RTR");
  }
}

module.exports = ConcordiaPegasus;
