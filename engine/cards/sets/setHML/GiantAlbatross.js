"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiantAlbatross extends Card {
  constructor(game) {
    super(game, "Giant Albatross", "Homelands", "HML");
  }
}

module.exports = GiantAlbatross;
