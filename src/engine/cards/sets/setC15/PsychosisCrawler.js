"use strict";
const Constants = require ("../../../Constants");
const PsychosisCrawlerBase = require("../setC18/PsychosisCrawler");

class PsychosisCrawler extends PsychosisCrawlerBase {
  constructor (game) {
    super(game, "Psychosis Crawler", "Commander 2015", "C15");
  }
}

module.exports = PsychosisCrawler;
