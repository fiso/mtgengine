"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrimordialHydraBase = require("../setM12/PrimordialHydra.js");

class PrimordialHydra extends PrimordialHydraBase {
  constructor(game) {
    super(game, "Primordial Hydra", "Media Inserts", "pMEI");
  }
}

module.exports = PrimordialHydra;
