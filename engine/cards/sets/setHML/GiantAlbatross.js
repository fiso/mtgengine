"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantAlbatross extends UnimplementedCard {
  constructor(game) {
    super(game, "Giant Albatross", "Homelands", "HML");
  }
}

module.exports = GiantAlbatross;
