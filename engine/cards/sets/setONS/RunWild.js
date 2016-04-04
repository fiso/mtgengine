"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RunWild extends Card {
  constructor(game) {
    super(game, "Run Wild", "Onslaught", "ONS");
  }
}

module.exports = RunWild;
