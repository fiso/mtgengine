"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LayBare extends Card {
  constructor(game) {
    super(game, "Lay Bare", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LayBare;
