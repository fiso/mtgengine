"use strict";
const Constants = require ("../../../Constants");
const LifeChiselBase = require("../setLEG/LifeChisel");

class LifeChisel extends LifeChiselBase {
  constructor(game) {
    super(game, "Life Chisel", "Masters Edition III", "ME3");
  }
}

module.exports = LifeChisel;
