"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RushwoodDryadBase = require("../set8ED/RushwoodDryad.js");

class RushwoodDryad extends RushwoodDryadBase {
  constructor(game) {
    super(game, "Rushwood Dryad", "Mercadian Masques", "MMQ");
  }
}

module.exports = RushwoodDryad;
