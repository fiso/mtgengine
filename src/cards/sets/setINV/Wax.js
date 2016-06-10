"use strict";
const Constants = require ("../../../Constants");
const WaxBase = require("../setARC/Wax");

class Wax extends WaxBase {
  constructor (game) {
    super(game, "Wax", "Invasion", "INV");
  }
}

module.exports = Wax;
