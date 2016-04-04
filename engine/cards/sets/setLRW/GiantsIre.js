"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiantsIre extends Card {
  constructor(game) {
    super(game, "Giant's Ire", "Lorwyn", "LRW");
  }
}

module.exports = GiantsIre;
