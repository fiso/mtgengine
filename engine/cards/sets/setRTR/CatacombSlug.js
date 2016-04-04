"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CatacombSlugBase = require("../setORI/CatacombSlug.js");

class CatacombSlug extends CatacombSlugBase {
  constructor(game) {
    super(game, "Catacomb Slug", "Return to Ravnica", "RTR");
  }
}

module.exports = CatacombSlug;
