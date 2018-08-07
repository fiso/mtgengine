"use strict";
const Constants = require ("../../../Constants");
const FlaringPainBase = require("../setWC03/FlaringPain");

class FlaringPain extends FlaringPainBase {
  constructor (game) {
    super(game, "Flaring Pain", "Judgment", "JUD");
  }
}

module.exports = FlaringPain;
