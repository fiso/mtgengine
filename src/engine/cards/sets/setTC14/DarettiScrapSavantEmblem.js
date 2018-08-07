"use strict";
const Constants = require ("../../../Constants");
const DarettiScrapSavantEmblemBase = require("../setTCM2/DarettiScrapSavantEmblem");

class DarettiScrapSavantEmblem extends DarettiScrapSavantEmblemBase {
  constructor (game) {
    super(game, "Daretti, Scrap Savant Emblem", "Commander 2014 Tokens", "TC14");
  }
}

module.exports = DarettiScrapSavantEmblem;
