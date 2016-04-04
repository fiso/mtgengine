"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SageoftheInwardEyeBase = require("../setKTK/SageoftheInwardEye.js");

class SageoftheInwardEye extends SageoftheInwardEyeBase {
  constructor(game) {
    super(game, "Sage of the Inward Eye", "Media Inserts", "pMEI");
  }
}

module.exports = SageoftheInwardEye;
