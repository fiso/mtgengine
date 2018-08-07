"use strict";
const Constants = require ("../../../Constants");
const HedronFieldsofAgadeemBase = require("../setPCA/HedronFieldsofAgadeem");

class HedronFieldsofAgadeem extends HedronFieldsofAgadeemBase {
  constructor (game) {
    super(game, "Hedron Fields of Agadeem", "Planechase 2012", "PC2");
  }
}

module.exports = HedronFieldsofAgadeem;
