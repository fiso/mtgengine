"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bound extends Card {
  constructor(game) {
    super(game, "Bound", "Dissension", "DIS");
  }
}

module.exports = Bound;
