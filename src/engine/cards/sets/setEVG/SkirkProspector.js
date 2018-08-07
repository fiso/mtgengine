"use strict";
const Constants = require ("../../../Constants");
const SkirkProspectorBase = require("../setDOM/SkirkProspector");

class SkirkProspector extends SkirkProspectorBase {
  constructor (game) {
    super(game, "Skirk Prospector", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = SkirkProspector;
