"use strict";
const Constants = require ("../../../Constants");
const PolymorphBase = require("../setM10/Polymorph");

class Polymorph extends PolymorphBase {
  constructor (game) {
    super(game, "Polymorph", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Polymorph;
