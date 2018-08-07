"use strict";
const Constants = require ("../../../Constants");
const RavenousBloodseekerBase = require("../setSOI/RavenousBloodseeker");

class RavenousBloodseeker extends RavenousBloodseekerBase {
  constructor (game) {
    super(game, "Ravenous Bloodseeker", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = RavenousBloodseeker;
