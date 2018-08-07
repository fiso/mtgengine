"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiggingRunner extends UnimplementedCard {
  constructor (game) {
    super(game, "Rigging Runner", "Ixalan", "XLN");
  }
}

module.exports = RiggingRunner;
