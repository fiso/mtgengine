"use strict";
const Constants = require ("../../../Constants");
const WarstormSurgeBase = require("../setC13/WarstormSurge");

class WarstormSurge extends WarstormSurgeBase {
  constructor(game) {
    super(game, "Warstorm Surge", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = WarstormSurge;
