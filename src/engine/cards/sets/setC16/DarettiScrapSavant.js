"use strict";
const Constants = require ("../../../Constants");
const DarettiScrapSavantBase = require("../setCM2/DarettiScrapSavant");

class DarettiScrapSavant extends DarettiScrapSavantBase {
  constructor (game) {
    super(game, "Daretti, Scrap Savant", "Commander 2016", "C16");
  }
}

module.exports = DarettiScrapSavant;
