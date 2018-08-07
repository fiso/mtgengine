"use strict";
const Constants = require ("../../../Constants");
const FlamekinBrawlerBase = require("../setJVC/FlamekinBrawler");

class FlamekinBrawler extends FlamekinBrawlerBase {
  constructor (game) {
    super(game, "Flamekin Brawler", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = FlamekinBrawler;
