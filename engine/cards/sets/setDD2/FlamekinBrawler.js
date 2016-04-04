"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlamekinBrawlerBase = require("../setDD3_JVC/FlamekinBrawler.js");

class FlamekinBrawler extends FlamekinBrawlerBase {
  constructor(game) {
    super(game, "Flamekin Brawler", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = FlamekinBrawler;
