"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodlotCrawler extends UnimplementedCard {
  constructor(game) {
    super(game, "Woodlot Crawler", "Dragon's Maze", "DGM");
  }
}

module.exports = WoodlotCrawler;
