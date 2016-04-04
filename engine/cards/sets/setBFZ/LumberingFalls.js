"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LumberingFalls extends Card {
  constructor(game) {
    super(game, "Lumbering Falls", "Battle for Zendikar", "BFZ");
  }
}

module.exports = LumberingFalls;
