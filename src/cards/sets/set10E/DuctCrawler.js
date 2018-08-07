"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DuctCrawler extends UnimplementedCard {
  constructor (game) {
    super(game, "Duct Crawler", "Tenth Edition", "10E");
  }
}

module.exports = DuctCrawler;
