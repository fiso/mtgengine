"use strict";
const Constants = require ("../../../Constants");
const CuombajjWitchesBase = require("../setMED/CuombajjWitches");

class CuombajjWitches extends CuombajjWitchesBase {
  constructor (game) {
    super(game, "Cuombajj Witches", "Magic Online Promos", "PRM");
  }
}

module.exports = CuombajjWitches;
