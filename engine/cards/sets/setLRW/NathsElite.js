"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NathsElite extends UnimplementedCard {
  constructor(game) {
    super(game, "Nath's Elite", "Lorwyn", "LRW");
  }
}

module.exports = NathsElite;
