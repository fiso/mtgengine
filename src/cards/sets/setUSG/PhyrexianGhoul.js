"use strict";
const Constants = require ("../../../Constants");
const PhyrexianGhoulBase = require("../setA25/PhyrexianGhoul");

class PhyrexianGhoul extends PhyrexianGhoulBase {
  constructor (game) {
    super(game, "Phyrexian Ghoul", "Urza's Saga", "USG");
  }
}

module.exports = PhyrexianGhoul;
