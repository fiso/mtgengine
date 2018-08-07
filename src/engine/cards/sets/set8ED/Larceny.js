"use strict";
const Constants = require ("../../../Constants");
const LarcenyBase = require("../setPHUK/Larceny");

class Larceny extends LarcenyBase {
  constructor (game) {
    super(game, "Larceny", "Eighth Edition", "8ED");
  }
}

module.exports = Larceny;
