"use strict";
const Constants = require ("../../../Constants");
const CourtHomunculusBase = require("../setMM2/CourtHomunculus");

class CourtHomunculus extends CourtHomunculusBase {
  constructor (game) {
    super(game, "Court Homunculus", "Modern Masters", "MMA");
  }
}

module.exports = CourtHomunculus;
