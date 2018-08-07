"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TethmosHighPriest extends UnimplementedCard {
  constructor (game) {
    super(game, "Tethmos High Priest", "Journey into Nyx", "JOU");
  }
}

module.exports = TethmosHighPriest;
