"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScuzzbackScrapper extends UnimplementedCard {
  constructor(game) {
    super(game, "Scuzzback Scrapper", "Shadowmoor", "SHM");
  }
}

module.exports = ScuzzbackScrapper;
