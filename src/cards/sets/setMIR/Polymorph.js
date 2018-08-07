"use strict";
const Constants = require ("../../../Constants");
const PolymorphBase = require("../setM10/Polymorph");

class Polymorph extends PolymorphBase {
  constructor (game) {
    super(game, "Polymorph", "Mirage", "MIR");
  }
}

module.exports = Polymorph;
