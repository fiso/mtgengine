"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CabalExecutioner extends UnimplementedCard {
  constructor(game) {
    super(game, "Cabal Executioner", "Onslaught", "ONS");
  }
}

module.exports = CabalExecutioner;
