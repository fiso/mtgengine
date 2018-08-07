"use strict";
const Constants = require ("../../../Constants");
const SilvergillAdeptBase = require("../setPRIX/SilvergillAdept");

class SilvergillAdept extends SilvergillAdeptBase {
  constructor (game) {
    super(game, "Silvergill Adept", "Lorwyn", "LRW");
  }
}

module.exports = SilvergillAdept;
