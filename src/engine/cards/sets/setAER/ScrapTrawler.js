"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScrapTrawler extends UnimplementedCard {
  constructor (game) {
    super(game, "Scrap Trawler", "Aether Revolt", "AER");
  }
}

module.exports = ScrapTrawler;
