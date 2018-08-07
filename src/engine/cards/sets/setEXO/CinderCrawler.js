"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CinderCrawler extends UnimplementedCard {
  constructor (game) {
    super(game, "Cinder Crawler", "Exodus", "EXO");
  }
}

module.exports = CinderCrawler;
