"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cursebreak extends UnimplementedCard {
  constructor (game) {
    super(game, "Cursebreak", "Avacyn Restored", "AVR");
  }
}

module.exports = Cursebreak;
