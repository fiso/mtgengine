"use strict";
const Constants = require ("../../../Constants");
const SpittingSlugBase = require("../setDRK/SpittingSlug");

class SpittingSlug extends SpittingSlugBase {
  constructor(game) {
    super(game, "Spitting Slug", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = SpittingSlug;
