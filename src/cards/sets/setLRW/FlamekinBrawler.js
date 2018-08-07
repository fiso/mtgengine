"use strict";
const Constants = require ("../../../Constants");
const FlamekinBrawlerBase = require("../setJVC/FlamekinBrawler");

class FlamekinBrawler extends FlamekinBrawlerBase {
  constructor (game) {
    super(game, "Flamekin Brawler", "Lorwyn", "LRW");
  }
}

module.exports = FlamekinBrawler;
