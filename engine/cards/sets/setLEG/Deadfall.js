"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Deadfall extends Card {
  constructor(game) {
    super(game, "Deadfall", "Legends", "LEG");
  }
}

module.exports = Deadfall;
