"use strict";
const Constants = require ("../../../Constants");
const PrimordialHydraBase = require("../setM13/PrimordialHydra");

class PrimordialHydra extends PrimordialHydraBase {
  constructor (game) {
    super(game, "Primordial Hydra", "Magic 2012", "M12");
  }
}

module.exports = PrimordialHydra;
