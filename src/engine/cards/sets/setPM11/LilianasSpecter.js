"use strict";
const Constants = require ("../../../Constants");
const LilianasSpecterBase = require("../setPCA/LilianasSpecter");

class LilianasSpecter extends LilianasSpecterBase {
  constructor (game) {
    super(game, "Liliana's Specter", "Magic 2011 Promos", "PM11");
  }
}

module.exports = LilianasSpecter;
