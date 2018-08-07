"use strict";
const Constants = require ("../../../Constants");
const FrenziedFugueBase = require("../setPZ2/FrenziedFugue");

class FrenziedFugue extends FrenziedFugueBase {
  constructor (game) {
    super(game, "Frenzied Fugue", "Commander 2016", "C16");
  }
}

module.exports = FrenziedFugue;
