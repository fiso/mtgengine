"use strict";
const Constants = require ("../../../Constants");
const PsychosisCrawlerBase = require("../setC18/PsychosisCrawler");

class PsychosisCrawler extends PsychosisCrawlerBase {
  constructor (game) {
    super(game, "Psychosis Crawler", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = PsychosisCrawler;
