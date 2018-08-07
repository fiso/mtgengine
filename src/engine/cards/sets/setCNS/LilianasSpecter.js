"use strict";
const Constants = require ("../../../Constants");
const LilianasSpecterBase = require("../setPCA/LilianasSpecter");

class LilianasSpecter extends LilianasSpecterBase {
  constructor (game) {
    super(game, "Liliana's Specter", "Conspiracy", "CNS");
  }
}

module.exports = LilianasSpecter;
