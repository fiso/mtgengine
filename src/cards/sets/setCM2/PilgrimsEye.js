"use strict";
const Constants = require ("../../../Constants");
const PilgrimsEyeBase = require("../setC18/PilgrimsEye");

class PilgrimsEye extends PilgrimsEyeBase {
  constructor (game) {
    super(game, "Pilgrim's Eye", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = PilgrimsEye;
