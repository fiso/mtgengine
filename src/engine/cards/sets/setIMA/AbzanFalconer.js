"use strict";
const Constants = require ("../../../Constants");
const AbzanFalconerBase = require("../setCM2/AbzanFalconer");

class AbzanFalconer extends AbzanFalconerBase {
  constructor (game) {
    super(game, "Abzan Falconer", "Iconic Masters", "IMA");
  }
}

module.exports = AbzanFalconer;
