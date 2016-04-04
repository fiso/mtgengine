"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SnappingCreeper extends Card {
  constructor(game) {
    super(game, "Snapping Creeper", "Worldwake", "WWK");
  }
}

module.exports = SnappingCreeper;
