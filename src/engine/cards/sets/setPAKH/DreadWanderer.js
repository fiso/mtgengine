"use strict";
const Constants = require ("../../../Constants");
const DreadWandererBase = require("../setAKH/DreadWanderer");

class DreadWanderer extends DreadWandererBase {
  constructor (game) {
    super(game, "Dread Wanderer", "Amonkhet Promos", "PAKH");
  }
}

module.exports = DreadWanderer;
