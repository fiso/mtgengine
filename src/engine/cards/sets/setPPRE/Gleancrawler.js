"use strict";
const Constants = require ("../../../Constants");
const GleancrawlerBase = require("../setDDJ/Gleancrawler");

class Gleancrawler extends GleancrawlerBase {
  constructor (game) {
    super(game, "Gleancrawler", "Prerelease Events", "PPRE");
  }
}

module.exports = Gleancrawler;
