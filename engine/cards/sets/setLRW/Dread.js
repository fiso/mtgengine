"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dread extends Card {
  constructor(game) {
    super(game, "Dread", "Lorwyn", "LRW");
  }
}

module.exports = Dread;
