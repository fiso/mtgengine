"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoverofDarkness extends UnimplementedCard {
  constructor (game) {
    super(game, "Cover of Darkness", "Onslaught", "ONS");
  }
}

module.exports = CoverofDarkness;
