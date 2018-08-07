"use strict";
const Constants = require ("../../../Constants");
const TarmogoyfBase = require("../setMM3/Tarmogoyf");

class Tarmogoyf extends TarmogoyfBase {
  constructor (game) {
    super(game, "Tarmogoyf", "Future Sight", "FUT");
  }
}

module.exports = Tarmogoyf;
