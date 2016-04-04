"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeflectingPalmBase = require("../setKTK/DeflectingPalm.js");

class DeflectingPalm extends DeflectingPalmBase {
  constructor(game) {
    super(game, "Deflecting Palm", "Prerelease Events", "pPRE");
  }
}

module.exports = DeflectingPalm;
