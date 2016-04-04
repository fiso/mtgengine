"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LadyCaleria extends Card {
  constructor(game) {
    super(game, "Lady Caleria", "Legends", "LEG");
  }
}

module.exports = LadyCaleria;
