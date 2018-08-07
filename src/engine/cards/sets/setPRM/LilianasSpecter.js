"use strict";
const Constants = require ("../../../Constants");
const LilianasSpecterBase = require("../setPCA/LilianasSpecter");

class LilianasSpecter extends LilianasSpecterBase {
  constructor (game) {
    super(game, "Liliana's Specter", "Magic Online Promos", "PRM");
  }
}

module.exports = LilianasSpecter;
