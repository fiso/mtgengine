"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Godsend extends UnimplementedCard {
  constructor (game) {
    super(game, "Godsend", "Journey into Nyx", "JOU");
  }
}

module.exports = Godsend;
