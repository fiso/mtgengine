"use strict";
const Constants = require ("../../../Constants");
const WarstormSurgeBase = require("../setCM2/WarstormSurge");

class WarstormSurge extends WarstormSurgeBase {
  constructor (game) {
    super(game, "Warstorm Surge", "Commander 2013", "C13");
  }
}

module.exports = WarstormSurge;
