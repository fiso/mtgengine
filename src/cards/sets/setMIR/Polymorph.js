"use strict";
const Constants = require ("../../../Constants");
const PolymorphBase = require("../set6ED/Polymorph");

class Polymorph extends PolymorphBase {
  constructor (game) {
    super(game, "Polymorph", "Mirage", "MIR");
  }
}

module.exports = Polymorph;
