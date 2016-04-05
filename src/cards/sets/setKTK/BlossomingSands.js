"use strict";
const Constants = require ("../../../Constants");
const BlossomingSandsBase = require("../setFRF/BlossomingSands");

class BlossomingSands extends BlossomingSandsBase {
  constructor(game) {
    super(game, "Blossoming Sands", "Khans of Tarkir", "KTK");
  }
}

module.exports = BlossomingSands;
