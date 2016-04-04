"use strict";
const Constants = require ("../../../Constants");
const CrosisthePurgerBase = require("../setINV/CrosisthePurger");

class CrosisthePurger extends CrosisthePurgerBase {
  constructor(game) {
    super(game, "Crosis, the Purger", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = CrosisthePurger;
