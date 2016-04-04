"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianGhoulBase = require("../setBRB/PhyrexianGhoul.js");

class PhyrexianGhoul extends PhyrexianGhoulBase {
  constructor(game) {
    super(game, "Phyrexian Ghoul", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianGhoul;
