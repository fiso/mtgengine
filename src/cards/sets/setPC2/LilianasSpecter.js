"use strict";
const Constants = require ("../../../Constants");
const LilianasSpecterBase = require("../setPCA/LilianasSpecter");

class LilianasSpecter extends LilianasSpecterBase {
  constructor (game) {
    super(game, "Liliana's Specter", "Planechase 2012", "PC2");
  }
}

module.exports = LilianasSpecter;
