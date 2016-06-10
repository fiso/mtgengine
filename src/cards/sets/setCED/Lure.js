"use strict";
const Constants = require ("../../../Constants");
const LureBase = require("../setCHK/Lure");

class Lure extends LureBase {
  constructor (game) {
    super(game, "Lure", "Collector's Edition", "CED");
  }
}

module.exports = Lure;
