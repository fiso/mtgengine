"use strict";
const Constants = require ("../../../Constants");
const SkirkProspectorBase = require("../setDD3_EVG/SkirkProspector");

class SkirkProspector extends SkirkProspectorBase {
  constructor(game) {
    super(game, "Skirk Prospector", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = SkirkProspector;
