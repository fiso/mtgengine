"use strict";
const Constants = require ("../../../Constants");
const ImmaculateMagistrateBase = require("../setCMA/ImmaculateMagistrate");

class ImmaculateMagistrate extends ImmaculateMagistrateBase {
  constructor (game) {
    super(game, "Immaculate Magistrate", "Commander 2014", "C14");
  }
}

module.exports = ImmaculateMagistrate;
