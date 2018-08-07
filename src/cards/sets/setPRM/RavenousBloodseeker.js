"use strict";
const Constants = require ("../../../Constants");
const RavenousBloodseekerBase = require("../setSOI/RavenousBloodseeker");

class RavenousBloodseeker extends RavenousBloodseekerBase {
  constructor (game) {
    super(game, "Ravenous Bloodseeker", "Magic Online Promos", "PRM");
  }
}

module.exports = RavenousBloodseeker;
