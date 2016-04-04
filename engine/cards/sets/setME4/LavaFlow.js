"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LavaFlow extends Card {
  constructor(game) {
    super(game, "Lava Flow", "Masters Edition IV", "ME4");
  }
}

module.exports = LavaFlow;
