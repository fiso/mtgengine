"use strict";
const Constants = require ("../../../Constants");
const ElvishPioneerBase = require("../set8ED/ElvishPioneer");

class ElvishPioneer extends ElvishPioneerBase {
  constructor (game) {
    super(game, "Elvish Pioneer", "Magic Online Promos", "PRM");
  }
}

module.exports = ElvishPioneer;
