"use strict";
const Constants = require ("../../../Constants");
const LureBase = require("../setIMA/Lure");

class Lure extends LureBase {
  constructor (game) {
    super(game, "Lure", "Seventh Edition", "7ED");
  }
}

module.exports = Lure;
