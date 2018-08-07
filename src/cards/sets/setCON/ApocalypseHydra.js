"use strict";
const Constants = require ("../../../Constants");
const ApocalypseHydraBase = require("../setBBD/ApocalypseHydra");

class ApocalypseHydra extends ApocalypseHydraBase {
  constructor (game) {
    super(game, "Apocalypse Hydra", "Conflux", "CON");
  }
}

module.exports = ApocalypseHydra;
