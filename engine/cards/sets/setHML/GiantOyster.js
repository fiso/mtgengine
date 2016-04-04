"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiantOyster extends Card {
  constructor(game) {
    super(game, "Giant Oyster", "Homelands", "HML");
  }
}

module.exports = GiantOyster;
