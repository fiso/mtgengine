"use strict";
const Constants = require ("../../../Constants");
const EliteJavelineerBase = require("../set8ED/EliteJavelineer");

class EliteJavelineer extends EliteJavelineerBase {
  constructor(game) {
    super(game, "Elite Javelineer", "Tempest", "TMP");
  }
}

module.exports = EliteJavelineer;
