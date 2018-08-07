"use strict";
const Constants = require ("../../../Constants");
const RelicSeekerBase = require("../setPORI/RelicSeeker");

class RelicSeeker extends RelicSeekerBase {
  constructor (game) {
    super(game, "Relic Seeker", "Magic Origins", "ORI");
  }
}

module.exports = RelicSeeker;
