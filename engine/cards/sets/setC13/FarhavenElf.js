"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FarhavenElf extends Card {
  constructor(game) {
    super(game, "Farhaven Elf", "Commander 2013 Edition", "C13");
  }
}

module.exports = FarhavenElf;
