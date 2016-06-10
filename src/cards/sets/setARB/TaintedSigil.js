"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaintedSigil extends UnimplementedCard {
  constructor (game) {
    super(game, "Tainted Sigil", "Alara Reborn", "ARB");
  }
}

module.exports = TaintedSigil;
