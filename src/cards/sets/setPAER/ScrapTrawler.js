"use strict";
const Constants = require ("../../../Constants");
const ScrapTrawlerBase = require("../setAER/ScrapTrawler");

class ScrapTrawler extends ScrapTrawlerBase {
  constructor (game) {
    super(game, "Scrap Trawler", "Aether Revolt Promos", "PAER");
  }
}

module.exports = ScrapTrawler;
