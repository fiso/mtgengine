"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SnappingThragg extends Card {
  constructor(game) {
    super(game, "Snapping Thragg", "Onslaught", "ONS");
  }
}

module.exports = SnappingThragg;
