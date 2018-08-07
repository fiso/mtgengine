"use strict";
const Constants = require ("../../../Constants");
const ReversetheSandsBase = require("../setC16/ReversetheSands");

class ReversetheSands extends ReversetheSandsBase {
  constructor (game) {
    super(game, "Reverse the Sands", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ReversetheSands;
