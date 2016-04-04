"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpinedBasher extends Card {
  constructor(game) {
    super(game, "Spined Basher", "Onslaught", "ONS");
  }
}

module.exports = SpinedBasher;
