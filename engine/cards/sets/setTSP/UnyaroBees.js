"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnyaroBees extends Card {
  constructor(game) {
    super(game, "Unyaro Bees", "Time Spiral", "TSP");
  }
}

module.exports = UnyaroBees;
