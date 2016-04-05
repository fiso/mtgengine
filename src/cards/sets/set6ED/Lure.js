"use strict";
const Constants = require ("../../../Constants");
const LureBase = require("../setCHK/Lure");

class Lure extends LureBase {
  constructor(game) {
    super(game, "Lure", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Lure;
