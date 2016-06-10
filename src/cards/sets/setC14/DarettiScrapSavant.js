"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarettiScrapSavant extends UnimplementedCard {
  constructor (game) {
    super(game, "Daretti, Scrap Savant", "Commander 2014", "C14");
  }
}

module.exports = DarettiScrapSavant;
