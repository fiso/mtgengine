"use strict";
const Constants = require ("../../../Constants");
const BravetheSandsBase = require("../setCM2/BravetheSands");

class BravetheSands extends BravetheSandsBase {
  constructor (game) {
    super(game, "Brave the Sands", "Khans of Tarkir", "KTK");
  }
}

module.exports = BravetheSands;
