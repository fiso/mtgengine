"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofBlossoms extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Blossoms", "Commander 2015", "C15");
  }
}

module.exports = WallofBlossoms;
