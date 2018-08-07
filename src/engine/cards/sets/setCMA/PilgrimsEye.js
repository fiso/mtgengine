"use strict";
const Constants = require ("../../../Constants");
const PilgrimsEyeBase = require("../setC18/PilgrimsEye");

class PilgrimsEye extends PilgrimsEyeBase {
  constructor (game) {
    super(game, "Pilgrim's Eye", "Commander Anthology", "CMA");
  }
}

module.exports = PilgrimsEye;
