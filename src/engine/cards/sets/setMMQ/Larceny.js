"use strict";
const Constants = require ("../../../Constants");
const LarcenyBase = require("../setPHUK/Larceny");

class Larceny extends LarcenyBase {
  constructor (game) {
    super(game, "Larceny", "Mercadian Masques", "MMQ");
  }
}

module.exports = Larceny;
