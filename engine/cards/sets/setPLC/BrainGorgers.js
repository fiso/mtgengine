"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrainGorgers extends Card {
  constructor(game) {
    super(game, "Brain Gorgers", "Planar Chaos", "PLC");
  }
}

module.exports = BrainGorgers;
