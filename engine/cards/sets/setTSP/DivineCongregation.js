"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DivineCongregation extends Card {
  constructor(game) {
    super(game, "Divine Congregation", "Time Spiral", "TSP");
  }
}

module.exports = DivineCongregation;
