"use strict";
const Constants = require ("../../../Constants");
const SmokestackBase = require("../setV14/Smokestack");

class Smokestack extends SmokestackBase {
  constructor(game) {
    super(game, "Smokestack", "Urza's Saga", "USG");
  }
}

module.exports = Smokestack;
