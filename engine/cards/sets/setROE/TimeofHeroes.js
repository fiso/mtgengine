"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimeofHeroes extends Card {
  constructor(game) {
    super(game, "Time of Heroes", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = TimeofHeroes;
