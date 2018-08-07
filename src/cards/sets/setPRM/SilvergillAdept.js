"use strict";
const Constants = require ("../../../Constants");
const SilvergillAdeptBase = require("../setPRIX/SilvergillAdept");

class SilvergillAdept extends SilvergillAdeptBase {
  constructor (game) {
    super(game, "Silvergill Adept", "Magic Online Promos", "PRM");
  }
}

module.exports = SilvergillAdept;
