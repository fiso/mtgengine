"use strict";
const Constants = require ("../../../Constants");
const PiaNalaarBase = require("../setKLD/PiaNalaar");

class PiaNalaar extends PiaNalaarBase {
  constructor (game) {
    super(game, "Pia Nalaar", "Kaladesh Promos", "PKLD");
  }
}

module.exports = PiaNalaar;
