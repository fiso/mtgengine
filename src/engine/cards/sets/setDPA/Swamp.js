"use strict";
const Constants = require ("../../../Constants");
const SwampBase = require("../setC18/Swamp");

class Swamp extends SwampBase {
  constructor (game) {
    super(game, "Swamp", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Swamp;
