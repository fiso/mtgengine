"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SyphonLifeBase = require("../setEVE/SyphonLife.js");

class SyphonLife extends SyphonLifeBase {
  constructor(game) {
    super(game, "Syphon Life", "Modern Masters", "MMA");
  }
}

module.exports = SyphonLife;
