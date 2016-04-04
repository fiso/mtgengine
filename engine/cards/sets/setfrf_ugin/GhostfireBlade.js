"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhostfireBladeBase = require("../setKTK/GhostfireBlade.js");

class GhostfireBlade extends GhostfireBladeBase {
  constructor(game) {
    super(game, "Ghostfire Blade", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = GhostfireBlade;
