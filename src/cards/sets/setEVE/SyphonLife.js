"use strict";
const Constants = require ("../../../Constants");
const SyphonLifeBase = require("../setMMA/SyphonLife");

class SyphonLife extends SyphonLifeBase {
  constructor (game) {
    super(game, "Syphon Life", "Eventide", "EVE");
  }
}

module.exports = SyphonLife;
