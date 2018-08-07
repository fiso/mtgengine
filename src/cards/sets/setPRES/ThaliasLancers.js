"use strict";
const Constants = require ("../../../Constants");
const ThaliasLancersBase = require("../setEMN/ThaliasLancers");

class ThaliasLancers extends ThaliasLancersBase {
  constructor (game) {
    super(game, "Thalia's Lancers", "Resale Promos", "PRES");
  }
}

module.exports = ThaliasLancers;
