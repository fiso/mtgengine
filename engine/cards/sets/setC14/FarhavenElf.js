"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FarhavenElfBase = require("../setC13/FarhavenElf.js");

class FarhavenElf extends FarhavenElfBase {
  constructor(game) {
    super(game, "Farhaven Elf", "Commander 2014", "C14");
  }
}

module.exports = FarhavenElf;
