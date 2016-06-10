"use strict";
const Constants = require ("../../../Constants");
const GerrardCapashenBase = require("../setAPC/GerrardCapashen");

class GerrardCapashen extends GerrardCapashenBase {
  constructor (game) {
    super(game, "Gerrard Capashen", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = GerrardCapashen;
