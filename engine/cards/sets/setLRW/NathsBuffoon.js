"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NathsBuffoon extends UnimplementedCard {
  constructor(game) {
    super(game, "Nath's Buffoon", "Lorwyn", "LRW");
  }
}

module.exports = NathsBuffoon;
