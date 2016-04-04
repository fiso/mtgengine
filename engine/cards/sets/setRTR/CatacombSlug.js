"use strict";
const Constants = require ("../../../Constants");
const CatacombSlugBase = require("../setORI/CatacombSlug");

class CatacombSlug extends CatacombSlugBase {
  constructor(game) {
    super(game, "Catacomb Slug", "Return to Ravnica", "RTR");
  }
}

module.exports = CatacombSlug;
