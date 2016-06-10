"use strict";
const Constants = require ("../../../Constants");
const LilianasSpecterBase = require("../setM11/LilianasSpecter");

class LilianasSpecter extends LilianasSpecterBase {
  constructor (game) {
    super(game, "Liliana's Specter", "Magic Game Day", "pMGD");
  }
}

module.exports = LilianasSpecter;
