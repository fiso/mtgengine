"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimberProtector extends Card {
  constructor(game) {
    super(game, "Timber Protector", "Lorwyn", "LRW");
  }
}

module.exports = TimberProtector;
