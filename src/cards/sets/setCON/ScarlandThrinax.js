"use strict";
const Constants = require ("../../../Constants");
const ScarlandThrinaxBase = require("../setC13/ScarlandThrinax");

class ScarlandThrinax extends ScarlandThrinaxBase {
  constructor (game) {
    super(game, "Scarland Thrinax", "Conflux", "CON");
  }
}

module.exports = ScarlandThrinax;
