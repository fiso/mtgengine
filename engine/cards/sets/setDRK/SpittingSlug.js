"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpittingSlug extends UnimplementedCard {
  constructor(game) {
    super(game, "Spitting Slug", "The Dark", "DRK");
  }
}

module.exports = SpittingSlug;
