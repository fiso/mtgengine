"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SomeDisassemblyRequired extends UnimplementedCard {
  constructor (game) {
    super(game, "Some Disassembly Required", "Happy Holidays", "HHO");
  }
}

module.exports = SomeDisassemblyRequired;
