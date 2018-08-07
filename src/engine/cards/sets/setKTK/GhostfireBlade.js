"use strict";
const Constants = require ("../../../Constants");
const GhostfireBladeBase = require("../setUGIN/GhostfireBlade");

class GhostfireBlade extends GhostfireBladeBase {
  constructor (game) {
    super(game, "Ghostfire Blade", "Khans of Tarkir", "KTK");
  }
}

module.exports = GhostfireBlade;
