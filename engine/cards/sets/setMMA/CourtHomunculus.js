"use strict";
const Constants = require ("../../../Constants");
const CourtHomunculusBase = require("../setCON/CourtHomunculus");

class CourtHomunculus extends CourtHomunculusBase {
  constructor(game) {
    super(game, "Court Homunculus", "Modern Masters", "MMA");
  }
}

module.exports = CourtHomunculus;
