"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpawnofThraxesBase = require("../setJOU/SpawnofThraxes.js");

class SpawnofThraxes extends SpawnofThraxesBase {
  constructor(game) {
    super(game, "Spawn of Thraxes", "Prerelease Events", "pPRE");
  }
}

module.exports = SpawnofThraxes;
