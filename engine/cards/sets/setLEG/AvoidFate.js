"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvoidFate extends Card {
  constructor(game) {
    super(game, "Avoid Fate", "Legends", "LEG");
  }
}

module.exports = AvoidFate;
