"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CanopyCrawler extends Card {
  constructor(game) {
    super(game, "Canopy Crawler", "Legions", "LGN");
  }
}

module.exports = CanopyCrawler;
