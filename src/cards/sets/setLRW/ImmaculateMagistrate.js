"use strict";
const Constants = require ("../../../Constants");
const ImmaculateMagistrateBase = require("../setCMA/ImmaculateMagistrate");

class ImmaculateMagistrate extends ImmaculateMagistrateBase {
  constructor (game) {
    super(game, "Immaculate Magistrate", "Lorwyn", "LRW");
  }
}

module.exports = ImmaculateMagistrate;
