"use strict";
const Constants = require ("../../../Constants");
const SpittingSlugBase = require("../setTSB/SpittingSlug");

class SpittingSlug extends SpittingSlugBase {
  constructor (game) {
    super(game, "Spitting Slug", "The Dark", "DRK");
  }
}

module.exports = SpittingSlug;
