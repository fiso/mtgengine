"use strict";
const Constants = require ("../../../Constants");
const SmokestackBase = require("../setV14/Smokestack");

class Smokestack extends SmokestackBase {
  constructor (game) {
    super(game, "Smokestack", "Vintage Masters", "VMA");
  }
}

module.exports = Smokestack;
