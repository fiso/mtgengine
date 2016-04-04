"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NobleQuarry extends Card {
  constructor(game) {
    super(game, "Noble Quarry", "Born of the Gods", "BNG");
  }
}

module.exports = NobleQuarry;
