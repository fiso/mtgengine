"use strict";
const Constants = require ("../../../Constants");
const GhostfireBladeBase = require("../setKTK/GhostfireBlade");

class GhostfireBlade extends GhostfireBladeBase {
  constructor (game) {
    super(game, "Ghostfire Blade", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = GhostfireBlade;
