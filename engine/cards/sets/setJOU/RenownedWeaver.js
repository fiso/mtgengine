"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RenownedWeaver extends UnimplementedCard {
  constructor(game) {
    super(game, "Renowned Weaver", "Journey into Nyx", "JOU");
  }
}

module.exports = RenownedWeaver;
