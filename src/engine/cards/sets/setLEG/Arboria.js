"use strict";
const Constants = require ("../../../Constants");
const ArboriaBase = require("../setME3/Arboria");

class Arboria extends ArboriaBase {
  constructor (game) {
    super(game, "Arboria", "Legends", "LEG");
  }
}

module.exports = Arboria;
