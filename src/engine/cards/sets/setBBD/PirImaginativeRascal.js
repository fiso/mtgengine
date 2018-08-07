"use strict";
const Constants = require ("../../../Constants");
const PirImaginativeRascalBase = require("../setPBBD/PirImaginativeRascal");

class PirImaginativeRascal extends PirImaginativeRascalBase {
  constructor (game) {
    super(game, "Pir, Imaginative Rascal", "Battlebond", "BBD");
  }
}

module.exports = PirImaginativeRascal;
