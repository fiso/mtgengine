"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofBlossoms extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Blossoms", "Commander Anthology", "CMA");
  }
}

module.exports = WallofBlossoms;
