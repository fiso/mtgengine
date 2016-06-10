"use strict";
const Constants = require ("../../../Constants");
const OblationBase = require("../setC14/Oblation");

class Oblation extends OblationBase {
  constructor (game) {
    super(game, "Oblation", "Onslaught", "ONS");
  }
}

module.exports = Oblation;
