"use strict";
const Constants = require ("../../../Constants");
const RallytheAncestorsBase = require("../setFRF/RallytheAncestors");

class RallytheAncestors extends RallytheAncestorsBase {
  constructor (game) {
    super(game, "Rally the Ancestors", "Fate Reforged Promos", "PFRF");
  }
}

module.exports = RallytheAncestors;
