"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LashOut extends Card {
  constructor(game) {
    super(game, "Lash Out", "Lorwyn", "LRW");
  }
}

module.exports = LashOut;
