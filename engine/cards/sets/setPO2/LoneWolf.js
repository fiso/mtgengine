"use strict";
const Constants = require ("../../../Constants");
const LoneWolfBase = require("../set8ED/LoneWolf");

class LoneWolf extends LoneWolfBase {
  constructor(game) {
    super(game, "Lone Wolf", "Portal Second Age", "PO2");
  }
}

module.exports = LoneWolf;
