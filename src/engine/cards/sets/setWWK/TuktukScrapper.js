"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TuktukScrapper extends UnimplementedCard {
  constructor (game) {
    super(game, "Tuktuk Scrapper", "Worldwake", "WWK");
  }
}

module.exports = TuktukScrapper;
