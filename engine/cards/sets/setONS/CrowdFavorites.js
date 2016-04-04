"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrowdFavorites extends Card {
  constructor(game) {
    super(game, "Crowd Favorites", "Onslaught", "ONS");
  }
}

module.exports = CrowdFavorites;
