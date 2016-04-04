"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoralityShift extends Card {
  constructor(game) {
    super(game, "Morality Shift", "Judgment", "JUD");
  }
}

module.exports = MoralityShift;
