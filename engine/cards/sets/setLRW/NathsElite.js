"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NathsElite extends Card {
  constructor(game) {
    super(game, "Nath's Elite", "Lorwyn", "LRW");
  }
}

module.exports = NathsElite;
