"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IncrementalGrowth extends Card {
  constructor(game) {
    super(game, "Incremental Growth", "Khans of Tarkir", "KTK");
  }
}

module.exports = IncrementalGrowth;
