"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GleancrawlerBase = require("../setDDJ/Gleancrawler.js");

class Gleancrawler extends GleancrawlerBase {
  constructor(game) {
    super(game, "Gleancrawler", "Prerelease Events", "pPRE");
  }
}

module.exports = Gleancrawler;
