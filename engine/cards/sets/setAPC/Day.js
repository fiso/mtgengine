"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Day extends Card {
  constructor(game) {
    super(game, "Day", "Apocalypse", "APC");
  }
}

module.exports = Day;
