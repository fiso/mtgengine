"use strict";
const Constants = require ("../../../Constants");
const PolymorphBase = require("../setM10/Polymorph");

class Polymorph extends PolymorphBase {
  constructor (game) {
    super(game, "Polymorph", "Ninth Edition", "9ED");
  }
}

module.exports = Polymorph;
