"use strict";
const Constants = require ("../../../Constants");
const WarstormSurgeBase = require("../setCM2/WarstormSurge");

class WarstormSurge extends WarstormSurgeBase {
  constructor (game) {
    super(game, "Warstorm Surge", "Planechase 2012", "PC2");
  }
}

module.exports = WarstormSurge;
