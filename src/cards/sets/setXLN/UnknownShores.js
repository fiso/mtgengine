"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnknownShores extends UnimplementedCard {
  constructor (game) {
    super(game, "Unknown Shores", "Ixalan", "XLN");
  }
}

module.exports = UnknownShores;
