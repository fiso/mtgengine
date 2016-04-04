"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StomperCub extends Card {
  constructor(game) {
    super(game, "Stomper Cub", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = StomperCub;
