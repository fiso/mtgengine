"use strict";
const Constants = require ("../../../Constants");
const LifeChiselBase = require("../setME3/LifeChisel");

class LifeChisel extends LifeChiselBase {
  constructor (game) {
    super(game, "Life Chisel", "Legends", "LEG");
  }
}

module.exports = LifeChisel;
