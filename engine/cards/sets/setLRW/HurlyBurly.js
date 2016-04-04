"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HurlyBurly extends Card {
  constructor(game) {
    super(game, "Hurly-Burly", "Lorwyn", "LRW");
  }
}

module.exports = HurlyBurly;
