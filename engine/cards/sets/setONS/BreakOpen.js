"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BreakOpen extends Card {
  constructor(game) {
    super(game, "Break Open", "Onslaught", "ONS");
  }
}

module.exports = BreakOpen;
