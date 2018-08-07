"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BishopofBinding extends UnimplementedCard {
  constructor (game) {
    super(game, "Bishop of Binding", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = BishopofBinding;
