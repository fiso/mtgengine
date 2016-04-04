"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RelicCrushBase = require("../setCMD/RelicCrush.js");

class RelicCrush extends RelicCrushBase {
  constructor(game) {
    super(game, "Relic Crush", "Zendikar", "ZEN");
  }
}

module.exports = RelicCrush;
