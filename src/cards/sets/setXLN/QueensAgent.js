"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QueensAgent extends UnimplementedCard {
  constructor (game) {
    super(game, "Queen's Agent", "Ixalan", "XLN");
  }
}

module.exports = QueensAgent;
