"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrowdFavorites extends UnimplementedCard {
  constructor (game) {
    super(game, "Crowd Favorites", "Onslaught", "ONS");
  }
}

module.exports = CrowdFavorites;
