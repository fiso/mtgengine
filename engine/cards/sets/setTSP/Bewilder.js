"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bewilder extends Card {
  constructor(game) {
    super(game, "Bewilder", "Time Spiral", "TSP");
  }
}

module.exports = Bewilder;
