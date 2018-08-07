"use strict";
const Constants = require ("../../../Constants");
const OblationBase = require("../setC16/Oblation");

class Oblation extends OblationBase {
  constructor (game) {
    super(game, "Oblation", "Commander 2014", "C14");
  }
}

module.exports = Oblation;
