"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PathtoExile extends Card {
  constructor(game) {
    super(game, "Path to Exile", "Archenemy", "ARC");
  }
}

module.exports = PathtoExile;
