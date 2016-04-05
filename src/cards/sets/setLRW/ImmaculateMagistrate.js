"use strict";
const Constants = require ("../../../Constants");
const ImmaculateMagistrateBase = require("../setC14/ImmaculateMagistrate");

class ImmaculateMagistrate extends ImmaculateMagistrateBase {
  constructor(game) {
    super(game, "Immaculate Magistrate", "Lorwyn", "LRW");
  }
}

module.exports = ImmaculateMagistrate;
