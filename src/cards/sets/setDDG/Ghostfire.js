"use strict";
const Constants = require ("../../../Constants");
const GhostfireBase = require("../setDDT/Ghostfire");

class Ghostfire extends GhostfireBase {
  constructor (game) {
    super(game, "Ghostfire", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = Ghostfire;
