"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WornPowerstoneBase = require("../setC14/WornPowerstone.js");

class WornPowerstone extends WornPowerstoneBase {
  constructor(game) {
    super(game, "Worn Powerstone", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = WornPowerstone;
