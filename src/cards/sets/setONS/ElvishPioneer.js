"use strict";
const Constants = require ("../../../Constants");
const ElvishPioneerBase = require("../set8ED/ElvishPioneer");

class ElvishPioneer extends ElvishPioneerBase {
  constructor(game) {
    super(game, "Elvish Pioneer", "Onslaught", "ONS");
  }
}

module.exports = ElvishPioneer;
