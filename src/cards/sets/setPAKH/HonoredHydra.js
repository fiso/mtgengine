"use strict";
const Constants = require ("../../../Constants");
const HonoredHydraBase = require("../setAKH/HonoredHydra");

class HonoredHydra extends HonoredHydraBase {
  constructor (game) {
    super(game, "Honored Hydra", "Amonkhet Promos", "PAKH");
  }
}

module.exports = HonoredHydra;
