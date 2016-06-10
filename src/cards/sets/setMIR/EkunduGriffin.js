"use strict";
const Constants = require ("../../../Constants");
const EkunduGriffinBase = require("../set6ED/EkunduGriffin");

class EkunduGriffin extends EkunduGriffinBase {
  constructor (game) {
    super(game, "Ekundu Griffin", "Mirage", "MIR");
  }
}

module.exports = EkunduGriffin;
