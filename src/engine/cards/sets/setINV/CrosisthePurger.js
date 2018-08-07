"use strict";
const Constants = require ("../../../Constants");
const CrosisthePurgerBase = require("../setC17/CrosisthePurger");

class CrosisthePurger extends CrosisthePurgerBase {
  constructor (game) {
    super(game, "Crosis, the Purger", "Invasion", "INV");
  }
}

module.exports = CrosisthePurger;
