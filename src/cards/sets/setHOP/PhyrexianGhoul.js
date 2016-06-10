"use strict";
const Constants = require ("../../../Constants");
const PhyrexianGhoulBase = require("../setBRB/PhyrexianGhoul");

class PhyrexianGhoul extends PhyrexianGhoulBase {
  constructor (game) {
    super(game, "Phyrexian Ghoul", "Planechase", "HOP");
  }
}

module.exports = PhyrexianGhoul;
