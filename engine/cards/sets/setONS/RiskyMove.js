"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RiskyMove extends Card {
  constructor(game) {
    super(game, "Risky Move", "Onslaught", "ONS");
  }
}

module.exports = RiskyMove;
