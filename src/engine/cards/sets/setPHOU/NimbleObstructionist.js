"use strict";
const Constants = require ("../../../Constants");
const NimbleObstructionistBase = require("../setHOU/NimbleObstructionist");

class NimbleObstructionist extends NimbleObstructionistBase {
  constructor (game) {
    super(game, "Nimble Obstructionist", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = NimbleObstructionist;
