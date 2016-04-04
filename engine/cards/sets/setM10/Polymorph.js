"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PolymorphBase = require("../set6ED/Polymorph.js");

class Polymorph extends PolymorphBase {
  constructor(game) {
    super(game, "Polymorph", "Magic 2010", "M10");
  }
}

module.exports = Polymorph;
