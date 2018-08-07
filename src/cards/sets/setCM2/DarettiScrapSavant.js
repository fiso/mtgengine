"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarettiScrapSavant extends UnimplementedCard {
  constructor (game) {
    super(game, "Daretti, Scrap Savant", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = DarettiScrapSavant;
