"use strict";
const Constants = require ("../../../Constants");
const ImmaculateMagistrateBase = require("../setCMA/ImmaculateMagistrate");

class ImmaculateMagistrate extends ImmaculateMagistrateBase {
  constructor (game) {
    super(game, "Immaculate Magistrate", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = ImmaculateMagistrate;
