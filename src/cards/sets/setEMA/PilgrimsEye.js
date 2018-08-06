"use strict";
const Constants = require ("../../../Constants");
const PilgrimsEyeBase = require("../setBFZ/PilgrimsEye");

class PilgrimsEye extends PilgrimsEyeBase {
  constructor (game) {
    super(game, "Pilgrim's Eye", "Eternal Masters", "EMA");
  }
}

module.exports = PilgrimsEye;
