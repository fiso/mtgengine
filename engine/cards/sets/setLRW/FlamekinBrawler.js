"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlamekinBrawlerBase = require("../setDD3_JVC/FlamekinBrawler.js");

class FlamekinBrawler extends FlamekinBrawlerBase {
  constructor(game) {
    super(game, "Flamekin Brawler", "Lorwyn", "LRW");
  }
}

module.exports = FlamekinBrawler;
