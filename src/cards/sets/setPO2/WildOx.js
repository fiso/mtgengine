"use strict";
const Constants = require ("../../../Constants");
const WildOxBase = require("../setME4/WildOx");

class WildOx extends WildOxBase {
  constructor(game) {
    super(game, "Wild Ox", "Portal Second Age", "PO2");
  }
}

module.exports = WildOx;
