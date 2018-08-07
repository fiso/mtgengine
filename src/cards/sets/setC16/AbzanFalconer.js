"use strict";
const Constants = require ("../../../Constants");
const AbzanFalconerBase = require("../setCM2/AbzanFalconer");

class AbzanFalconer extends AbzanFalconerBase {
  constructor (game) {
    super(game, "Abzan Falconer", "Commander 2016", "C16");
  }
}

module.exports = AbzanFalconer;
