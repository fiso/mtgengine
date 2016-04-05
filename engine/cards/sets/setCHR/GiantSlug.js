"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantSlug extends UnimplementedCard {
  constructor(game) {
    super(game, "Giant Slug", "Chronicles", "CHR");
  }
}

module.exports = GiantSlug;
