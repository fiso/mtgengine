"use strict";
const Constants = require ("../../../Constants");
const KabiraVindicatorBase = require("../setDDP/KabiraVindicator");

class KabiraVindicator extends KabiraVindicatorBase {
  constructor (game) {
    super(game, "Kabira Vindicator", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = KabiraVindicator;
