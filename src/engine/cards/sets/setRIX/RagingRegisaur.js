"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RagingRegisaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Raging Regisaur", "Rivals of Ixalan", "RIX");
  }
}

module.exports = RagingRegisaur;
