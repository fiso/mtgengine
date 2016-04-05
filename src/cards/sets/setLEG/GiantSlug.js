"use strict";
const Constants = require ("../../../Constants");
const GiantSlugBase = require("../setCHR/GiantSlug");

class GiantSlug extends GiantSlugBase {
  constructor(game) {
    super(game, "Giant Slug", "Legends", "LEG");
  }
}

module.exports = GiantSlug;
