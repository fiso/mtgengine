"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hammerheim extends Card {
  constructor(game) {
    super(game, "Hammerheim", "Legends", "LEG");
  }
}

module.exports = Hammerheim;
