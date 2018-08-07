"use strict";
const Constants = require ("../../../Constants");
const ButcherGhoulBase = require("../setDDQ/ButcherGhoul");

class ButcherGhoul extends ButcherGhoulBase {
  constructor (game) {
    super(game, "Butcher Ghoul", "Avacyn Restored", "AVR");
  }
}

module.exports = ButcherGhoul;
