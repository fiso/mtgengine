"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThoughtVessel extends Card {
  constructor(game) {
    super(game, "Thought Vessel", "Commander 2015", "C15");
  }
}

module.exports = ThoughtVessel;
