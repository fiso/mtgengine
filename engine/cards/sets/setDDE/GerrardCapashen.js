"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GerrardCapashenBase = require("../setAPC/GerrardCapashen.js");

class GerrardCapashen extends GerrardCapashenBase {
  constructor(game) {
    super(game, "Gerrard Capashen", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = GerrardCapashen;
