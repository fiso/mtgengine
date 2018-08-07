"use strict";
const Constants = require ("../../../Constants");
const ArcbondBase = require("../setFRF/Arcbond");

class Arcbond extends ArcbondBase {
  constructor (game) {
    super(game, "Arcbond", "Fate Reforged Promos", "PFRF");
  }
}

module.exports = Arcbond;
