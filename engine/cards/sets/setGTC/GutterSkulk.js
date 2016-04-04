"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GutterSkulk extends Card {
  constructor(game) {
    super(game, "Gutter Skulk", "Gatecrash", "GTC");
  }
}

module.exports = GutterSkulk;
