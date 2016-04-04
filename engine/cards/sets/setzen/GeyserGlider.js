"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GeyserGliderBase = require("../setDDI/GeyserGlider.js");

class GeyserGlider extends GeyserGliderBase {
  constructor(game) {
    super(game, "Geyser Glider", "Zendikar", "ZEN");
  }
}

module.exports = GeyserGlider;
