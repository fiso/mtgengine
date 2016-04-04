"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimeofNeed extends Card {
  constructor(game) {
    super(game, "Time of Need", "Champions of Kamigawa", "CHK");
  }
}

module.exports = TimeofNeed;
