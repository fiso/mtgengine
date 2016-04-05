"use strict";
const Constants = require ("../../../Constants");
const GeyserGliderBase = require("../setDDI/GeyserGlider");

class GeyserGlider extends GeyserGliderBase {
  constructor(game) {
    super(game, "Geyser Glider", "Zendikar", "ZEN");
  }
}

module.exports = GeyserGlider;
