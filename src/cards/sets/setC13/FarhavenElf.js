"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FarhavenElf extends UnimplementedCard {
  constructor (game) {
    super(game, "Farhaven Elf", "Commander 2013 Edition", "C13");
  }
}

module.exports = FarhavenElf;
