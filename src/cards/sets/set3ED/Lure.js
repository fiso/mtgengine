"use strict";
const Constants = require ("../../../Constants");
const LureBase = require("../setCHK/Lure");

class Lure extends LureBase {
  constructor (game) {
    super(game, "Lure", "Revised Edition", "3ED");
  }
}

module.exports = Lure;
