"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CatacombSlug extends Card {
  constructor(game) {
    super(game, "Catacomb Slug", "Magic Origins", "ORI");
  }
}

module.exports = CatacombSlug;
