"use strict";
const Constants = require ("../../../Constants");
const PrimordialHydraBase = require("../setM12/PrimordialHydra");

class PrimordialHydra extends PrimordialHydraBase {
  constructor (game) {
    super(game, "Primordial Hydra", "Magic 2013", "M13");
  }
}

module.exports = PrimordialHydra;
