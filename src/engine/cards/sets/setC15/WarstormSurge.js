"use strict";
const Constants = require ("../../../Constants");
const WarstormSurgeBase = require("../setCM2/WarstormSurge");

class WarstormSurge extends WarstormSurgeBase {
  constructor (game) {
    super(game, "Warstorm Surge", "Commander 2015", "C15");
  }
}

module.exports = WarstormSurge;
