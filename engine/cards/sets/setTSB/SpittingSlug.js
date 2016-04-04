"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpittingSlugBase = require("../setDRK/SpittingSlug.js");

class SpittingSlug extends SpittingSlugBase {
  constructor(game) {
    super(game, "Spitting Slug", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = SpittingSlug;
