"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrimordialHydraBase = require("../setM12/PrimordialHydra.js");

class PrimordialHydra extends PrimordialHydraBase {
  constructor(game) {
    super(game, "Primordial Hydra", "Magic 2013", "M13");
  }
}

module.exports = PrimordialHydra;
