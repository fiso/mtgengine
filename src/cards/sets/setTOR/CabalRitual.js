"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CabalRitual extends UnimplementedCard {
  constructor(game) {
    super(game, "Cabal Ritual", "Torment", "TOR");
  }
}

module.exports = CabalRitual;
