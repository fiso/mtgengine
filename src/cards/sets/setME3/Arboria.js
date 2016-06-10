"use strict";
const Constants = require ("../../../Constants");
const ArboriaBase = require("../setLEG/Arboria");

class Arboria extends ArboriaBase {
  constructor (game) {
    super(game, "Arboria", "Masters Edition III", "ME3");
  }
}

module.exports = Arboria;
