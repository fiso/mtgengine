"use strict";
const Constants = require ("../../../Constants");
const TheMendingofDominariaBase = require("../setDOM/TheMendingofDominaria");

class TheMendingofDominaria extends TheMendingofDominariaBase {
  constructor (game) {
    super(game, "The Mending of Dominaria", "Dominaria Promos", "PDOM");
  }
}

module.exports = TheMendingofDominaria;
