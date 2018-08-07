"use strict";
const Constants = require ("../../../Constants");
const TriskelavusBase = require("../setCM2/Triskelavus");

class Triskelavus extends TriskelavusBase {
  constructor (game) {
    super(game, "Triskelavus", "Commander 2011", "CMD");
  }
}

module.exports = Triskelavus;
