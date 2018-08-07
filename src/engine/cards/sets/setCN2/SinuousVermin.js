"use strict";
const Constants = require ("../../../Constants");
const SinuousVerminBase = require("../setPZ2/SinuousVermin");

class SinuousVermin extends SinuousVerminBase {
  constructor (game) {
    super(game, "Sinuous Vermin", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = SinuousVermin;
