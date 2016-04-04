"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NathsBuffoon extends Card {
  constructor(game) {
    super(game, "Nath's Buffoon", "Lorwyn", "LRW");
  }
}

module.exports = NathsBuffoon;
