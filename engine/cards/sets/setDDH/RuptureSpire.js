"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RuptureSpireBase = require("../setC13/RuptureSpire.js");

class RuptureSpire extends RuptureSpireBase {
  constructor(game) {
    super(game, "Rupture Spire", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = RuptureSpire;
