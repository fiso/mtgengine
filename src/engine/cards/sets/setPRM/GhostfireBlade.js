"use strict";
const Constants = require ("../../../Constants");
const GhostfireBladeBase = require("../setUGIN/GhostfireBlade");

class GhostfireBlade extends GhostfireBladeBase {
  constructor (game) {
    super(game, "Ghostfire Blade", "Magic Online Promos", "PRM");
  }
}

module.exports = GhostfireBlade;
