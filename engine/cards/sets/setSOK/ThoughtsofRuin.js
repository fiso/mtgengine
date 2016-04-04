"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThoughtsofRuin extends Card {
  constructor(game) {
    super(game, "Thoughts of Ruin", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = ThoughtsofRuin;
