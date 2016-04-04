"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DuctCrawlerBase = require("../setSTH/DuctCrawler.js");

class DuctCrawler extends DuctCrawlerBase {
  constructor(game) {
    super(game, "Duct Crawler", "Tenth Edition", "10E");
  }
}

module.exports = DuctCrawler;
