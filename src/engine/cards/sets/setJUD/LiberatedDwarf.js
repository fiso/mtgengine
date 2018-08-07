"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LiberatedDwarf extends UnimplementedCard {
  constructor (game) {
    super(game, "Liberated Dwarf", "Judgment", "JUD");
  }
}

module.exports = LiberatedDwarf;
