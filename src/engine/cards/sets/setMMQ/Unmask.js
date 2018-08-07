"use strict";
const Constants = require ("../../../Constants");
const UnmaskBase = require("../setV16/Unmask");

class Unmask extends UnmaskBase {
  constructor (game) {
    super(game, "Unmask", "Mercadian Masques", "MMQ");
  }
}

module.exports = Unmask;
