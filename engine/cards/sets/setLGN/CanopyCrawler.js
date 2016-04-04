"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CanopyCrawler extends UnimplementedCard {
  constructor(game) {
    super(game, "Canopy Crawler", "Legions", "LGN");
  }
}

module.exports = CanopyCrawler;
