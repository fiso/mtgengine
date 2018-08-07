"use strict";
const Constants = require ("../../../Constants");
const DarettiScrapSavantEmblemBase = require("../setTCM2/DarettiScrapSavantEmblem");

class DarettiScrapSavantEmblem extends DarettiScrapSavantEmblemBase {
  constructor (game) {
    super(game, "Daretti, Scrap Savant Emblem", "Commander 2016 Tokens", "TC16");
  }
}

module.exports = DarettiScrapSavantEmblem;
