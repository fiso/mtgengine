"use strict";
const Constants = require ("../../../Constants");
const LilianasContractBase = require("../setM19/LilianasContract");

class LilianasContract extends LilianasContractBase {
  constructor (game) {
    super(game, "Liliana's Contract", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = LilianasContract;
