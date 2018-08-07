"use strict";
const Constants = require ("../../../Constants");
const SindbadBase = require("../setTSB/Sindbad");

class Sindbad extends SindbadBase {
  constructor (game) {
    super(game, "Sindbad", "Arabian Nights", "ARN");
  }
}

module.exports = Sindbad;
