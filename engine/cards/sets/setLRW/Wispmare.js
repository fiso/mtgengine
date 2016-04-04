"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Wispmare extends Card {
  constructor(game) {
    super(game, "Wispmare", "Lorwyn", "LRW");
  }
}

module.exports = Wispmare;
