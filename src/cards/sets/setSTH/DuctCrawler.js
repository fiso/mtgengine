"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DuctCrawler extends UnimplementedCard {
  constructor (game) {
    super(game, "Duct Crawler", "Stronghold", "STH");
  }
}

module.exports = DuctCrawler;
