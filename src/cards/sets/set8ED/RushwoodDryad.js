"use strict";
const Constants = require ("../../../Constants");
const RushwoodDryadBase = require("../set10E/RushwoodDryad");

class RushwoodDryad extends RushwoodDryadBase {
  constructor (game) {
    super(game, "Rushwood Dryad", "Eighth Edition", "8ED");
  }
}

module.exports = RushwoodDryad;
