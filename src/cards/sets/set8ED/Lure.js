"use strict";
const Constants = require ("../../../Constants");
const LureBase = require("../setCHK/Lure");

class Lure extends LureBase {
  constructor(game) {
    super(game, "Lure", "Eighth Edition", "8ED");
  }
}

module.exports = Lure;
