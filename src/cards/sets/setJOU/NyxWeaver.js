"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NyxWeaver extends UnimplementedCard {
  constructor(game) {
    super(game, "Nyx Weaver", "Journey into Nyx", "JOU");
  }
}

module.exports = NyxWeaver;
