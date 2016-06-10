"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SiltCrawler extends UnimplementedCard {
  constructor (game) {
    super(game, "Silt Crawler", "Prophecy", "PCY");
  }
}

module.exports = SiltCrawler;
