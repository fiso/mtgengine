"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WhitemaneLionBase = require("../setC14/WhitemaneLion.js");

class WhitemaneLion extends WhitemaneLionBase {
  constructor(game) {
    super(game, "Whitemane Lion", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = WhitemaneLion;
