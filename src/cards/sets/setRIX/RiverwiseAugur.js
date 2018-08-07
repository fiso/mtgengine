"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiverwiseAugur extends UnimplementedCard {
  constructor (game) {
    super(game, "Riverwise Augur", "Rivals of Ixalan", "RIX");
  }
}

module.exports = RiverwiseAugur;
