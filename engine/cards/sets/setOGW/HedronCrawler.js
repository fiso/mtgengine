"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HedronCrawler extends Card {
  constructor(game) {
    super(game, "Hedron Crawler", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = HedronCrawler;
