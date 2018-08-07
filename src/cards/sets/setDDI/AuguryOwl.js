"use strict";
const Constants = require ("../../../Constants");
const AuguryOwlBase = require("../setPCA/AuguryOwl");

class AuguryOwl extends AuguryOwlBase {
  constructor (game) {
    super(game, "Augury Owl", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = AuguryOwl;
