"use strict";
const Constants = require ("../../../Constants");
const InkfathomDiversBase = require("../setDDT/InkfathomDivers");

class InkfathomDivers extends InkfathomDiversBase {
  constructor (game) {
    super(game, "Inkfathom Divers", "Lorwyn", "LRW");
  }
}

module.exports = InkfathomDivers;
