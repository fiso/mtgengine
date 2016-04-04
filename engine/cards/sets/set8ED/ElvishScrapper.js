"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishScrapper extends Card {
  constructor(game) {
    super(game, "Elvish Scrapper", "Eighth Edition", "8ED");
  }
}

module.exports = ElvishScrapper;
