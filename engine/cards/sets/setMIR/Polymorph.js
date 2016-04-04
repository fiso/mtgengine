"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PolymorphBase = require("../set6ED/Polymorph.js");

class Polymorph extends PolymorphBase {
  constructor(game) {
    super(game, "Polymorph", "Mirage", "MIR");
  }
}

module.exports = Polymorph;
