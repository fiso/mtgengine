"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CatacombSlug extends UnimplementedCard {
  constructor (game) {
    super(game, "Catacomb Slug", "Magic Origins", "ORI");
  }
}

module.exports = CatacombSlug;
