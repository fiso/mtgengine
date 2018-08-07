"use strict";
const Constants = require ("../../../Constants");
const GleancrawlerBase = require("../setDDJ/Gleancrawler");

class Gleancrawler extends GleancrawlerBase {
  constructor (game) {
    super(game, "Gleancrawler", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Gleancrawler;
