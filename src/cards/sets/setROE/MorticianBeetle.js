"use strict";
const Constants = require ("../../../Constants");
const MorticianBeetleBase = require("../setMM3/MorticianBeetle");

class MorticianBeetle extends MorticianBeetleBase {
  constructor (game) {
    super(game, "Mortician Beetle", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = MorticianBeetle;
