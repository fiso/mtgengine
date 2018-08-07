"use strict";
const Constants = require ("../../../Constants");
const SaddlebackLagacBase = require("../setBBD/SaddlebackLagac");

class SaddlebackLagac extends SaddlebackLagacBase {
  constructor (game) {
    super(game, "Saddleback Lagac", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SaddlebackLagac;
