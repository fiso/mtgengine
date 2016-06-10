"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NarstadScrapper extends UnimplementedCard {
  constructor (game) {
    super(game, "Narstad Scrapper", "Avacyn Restored", "AVR");
  }
}

module.exports = NarstadScrapper;
