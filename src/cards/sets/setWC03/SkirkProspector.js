"use strict";
const Constants = require ("../../../Constants");
const SkirkProspectorBase = require("../setDOM/SkirkProspector");

class SkirkProspector extends SkirkProspectorBase {
  constructor (game) {
    super(game, "Skirk Prospector", "World Championship Decks 2003", "WC03");
  }
}

module.exports = SkirkProspector;
