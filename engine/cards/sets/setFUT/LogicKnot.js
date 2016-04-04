"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LogicKnot extends Card {
  constructor(game) {
    super(game, "Logic Knot", "Future Sight", "FUT");
  }
}

module.exports = LogicKnot;
