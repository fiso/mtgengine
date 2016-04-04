"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ImmaculateMagistrateBase = require("../setC14/ImmaculateMagistrate.js");

class ImmaculateMagistrate extends ImmaculateMagistrateBase {
  constructor(game) {
    super(game, "Immaculate Magistrate", "Lorwyn", "LRW");
  }
}

module.exports = ImmaculateMagistrate;
