"use strict";
const Constants = require ("../../../Constants");
const LureBase = require("../setCHK/Lure");

class Lure extends LureBase {
  constructor(game) {
    super(game, "Lure", "Mercadian Masques", "MMQ");
  }
}

module.exports = Lure;
