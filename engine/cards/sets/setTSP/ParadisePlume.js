"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ParadisePlume extends Card {
  constructor(game) {
    super(game, "Paradise Plume", "Time Spiral", "TSP");
  }
}

module.exports = ParadisePlume;
