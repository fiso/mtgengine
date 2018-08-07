"use strict";
const Constants = require ("../../../Constants");
const WarstormSurgeBase = require("../setCM2/WarstormSurge");

class WarstormSurge extends WarstormSurgeBase {
  constructor (game) {
    super(game, "Warstorm Surge", "Planechase Anthology", "PCA");
  }
}

module.exports = WarstormSurge;
