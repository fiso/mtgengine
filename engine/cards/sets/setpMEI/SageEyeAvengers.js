"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SageEyeAvengersBase = require("../setFRF/SageEyeAvengers.js");

class SageEyeAvengers extends SageEyeAvengersBase {
  constructor(game) {
    super(game, "Sage-Eye Avengers", "Media Inserts", "pMEI");
  }
}

module.exports = SageEyeAvengers;
