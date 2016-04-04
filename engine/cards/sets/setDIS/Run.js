"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Run extends Card {
  constructor(game) {
    super(game, "Run", "Dissension", "DIS");
  }
}

module.exports = Run;
