"use strict";
const Constants = require ("../../../Constants");
const ScrapTrawlerBase = require("../setAER/ScrapTrawler");

class ScrapTrawler extends ScrapTrawlerBase {
  constructor (game) {
    super(game, "Scrap Trawler", "Magic Online Promos", "PRM");
  }
}

module.exports = ScrapTrawler;
