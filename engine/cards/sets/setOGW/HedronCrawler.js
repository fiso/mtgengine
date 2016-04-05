"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HedronCrawler extends UnimplementedCard {
  constructor(game) {
    super(game, "Hedron Crawler", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = HedronCrawler;
