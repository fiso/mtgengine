"use strict";
const Constants = require ("../../../Constants");
const PhyrexianGhoulBase = require("../setA25/PhyrexianGhoul");

class PhyrexianGhoul extends PhyrexianGhoulBase {
  constructor (game) {
    super(game, "Phyrexian Ghoul", "Battle Royale Box Set", "BRB");
  }
}

module.exports = PhyrexianGhoul;
