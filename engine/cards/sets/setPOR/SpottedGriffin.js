"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpottedGriffinBase = require("../setME4/SpottedGriffin.js");

class SpottedGriffin extends SpottedGriffinBase {
  constructor(game) {
    super(game, "Spotted Griffin", "Portal", "POR");
  }
}

module.exports = SpottedGriffin;
