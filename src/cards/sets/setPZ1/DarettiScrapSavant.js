"use strict";
const Constants = require ("../../../Constants");
const DarettiScrapSavantBase = require("../setCM2/DarettiScrapSavant");

class DarettiScrapSavant extends DarettiScrapSavantBase {
  constructor (game) {
    super(game, "Daretti, Scrap Savant", "Legendary Cube", "PZ1");
  }
}

module.exports = DarettiScrapSavant;
