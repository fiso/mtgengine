"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnslavedDwarf extends UnimplementedCard {
  constructor(game) {
    super(game, "Enslaved Dwarf", "Torment", "TOR");
  }
}

module.exports = EnslavedDwarf;
