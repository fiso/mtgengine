"use strict";
const Constants = require ("../../../Constants");
const FarhavenElfBase = require("../setC18/FarhavenElf");

class FarhavenElf extends FarhavenElfBase {
  constructor (game) {
    super(game, "Farhaven Elf", "Commander 2013", "C13");
  }
}

module.exports = FarhavenElf;
