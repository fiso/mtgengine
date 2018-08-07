"use strict";
const Constants = require ("../../../Constants");
const LilianasSpecterBase = require("../setPCA/LilianasSpecter");

class LilianasSpecter extends LilianasSpecterBase {
  constructor (game) {
    super(game, "Liliana's Specter", "Magic 2011", "M11");
  }
}

module.exports = LilianasSpecter;
