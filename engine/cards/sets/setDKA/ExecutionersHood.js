"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExecutionersHood extends Card {
  constructor(game) {
    super(game, "Executioner's Hood", "Dark Ascension", "DKA");
  }
}

module.exports = ExecutionersHood;
