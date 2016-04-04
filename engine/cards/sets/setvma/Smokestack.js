"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SmokestackBase = require("../setV14/Smokestack.js");

class Smokestack extends SmokestackBase {
  constructor(game) {
    super(game, "Smokestack", "Vintage Masters", "VMA");
  }
}

module.exports = Smokestack;
