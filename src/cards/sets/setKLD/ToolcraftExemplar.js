"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ToolcraftExemplar extends UnimplementedCard {
  constructor (game) {
    super(game, "Toolcraft Exemplar", "Kaladesh", "KLD");
  }
}

module.exports = ToolcraftExemplar;
