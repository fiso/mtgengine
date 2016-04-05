"use strict";
const Constants = require ("../../../Constants");
const SyphonLifeBase = require("../setEVE/SyphonLife");

class SyphonLife extends SyphonLifeBase {
  constructor(game) {
    super(game, "Syphon Life", "Modern Masters", "MMA");
  }
}

module.exports = SyphonLife;
