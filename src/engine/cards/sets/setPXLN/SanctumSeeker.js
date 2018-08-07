"use strict";
const Constants = require ("../../../Constants");
const SanctumSeekerBase = require("../setXLN/SanctumSeeker");

class SanctumSeeker extends SanctumSeekerBase {
  constructor (game) {
    super(game, "Sanctum Seeker", "Ixalan Promos", "PXLN");
  }
}

module.exports = SanctumSeeker;
