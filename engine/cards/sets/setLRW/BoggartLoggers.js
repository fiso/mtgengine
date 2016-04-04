"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoggartLoggers extends Card {
  constructor(game) {
    super(game, "Boggart Loggers", "Lorwyn", "LRW");
  }
}

module.exports = BoggartLoggers;
