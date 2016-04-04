"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GwendlynDiCorciBase = require("../setLEG/GwendlynDiCorci.js");

class GwendlynDiCorci extends GwendlynDiCorciBase {
  constructor(game) {
    super(game, "Gwendlyn Di Corci", "Masters Edition III", "ME3");
  }
}

module.exports = GwendlynDiCorci;
