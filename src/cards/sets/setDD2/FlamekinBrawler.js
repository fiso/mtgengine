"use strict";
const Constants = require ("../../../Constants");
const FlamekinBrawlerBase = require("../setDD3_JVC/FlamekinBrawler");

class FlamekinBrawler extends FlamekinBrawlerBase {
  constructor (game) {
    super(game, "Flamekin Brawler", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = FlamekinBrawler;
