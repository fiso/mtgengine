"use strict";
const Constants = require ("../../../Constants");
const OverrunBase = require("../setATH/Overrun");

class Overrun extends OverrunBase {
  constructor (game) {
    super(game, "Overrun", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Overrun;
