"use strict";
const Constants = require ("../../../Constants");
const OutlandColossusBase = require("../setPORI/OutlandColossus");

class OutlandColossus extends OutlandColossusBase {
  constructor (game) {
    super(game, "Outland Colossus", "Resale Promos", "PRES");
  }
}

module.exports = OutlandColossus;
