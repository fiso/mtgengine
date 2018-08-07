"use strict";
const Constants = require ("../../../Constants");
const InspiringStatuaryBase = require("../setAER/InspiringStatuary");

class InspiringStatuary extends InspiringStatuaryBase {
  constructor (game) {
    super(game, "Inspiring Statuary", "Aether Revolt Promos", "PAER");
  }
}

module.exports = InspiringStatuary;
