"use strict";
const Constants = require ("../../../Constants");
const GeierReachBanditVildinPackAlphaBase = require("../setSOI/GeierReachBanditVildinPackAlpha");

class GeierReachBanditVildinPackAlpha extends GeierReachBanditVildinPackAlphaBase {
  constructor (game) {
    super(game, "Geier Reach Bandit // Vildin-Pack Alpha", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = GeierReachBanditVildinPackAlpha;
