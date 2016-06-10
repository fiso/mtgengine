"use strict";
const Constants = require ("../../../Constants");
const SkirkProspectorBase = require("../setDD3_EVG/SkirkProspector");

class SkirkProspector extends SkirkProspectorBase {
  constructor (game) {
    super(game, "Skirk Prospector", "Vintage Masters", "VMA");
  }
}

module.exports = SkirkProspector;
