"use strict";
const Constants = require ("../../../Constants");
const HowlfromBeyondBase = require("../setME4/HowlfromBeyond");

class HowlfromBeyond extends HowlfromBeyondBase {
  constructor (game) {
    super(game, "Howl from Beyond", "Classic Sixth Edition", "6ED");
  }
}

module.exports = HowlfromBeyond;
