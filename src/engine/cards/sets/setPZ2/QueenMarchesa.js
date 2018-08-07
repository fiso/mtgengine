"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QueenMarchesa extends UnimplementedCard {
  constructor (game) {
    super(game, "Queen Marchesa", "You Make the Cube", "PZ2");
  }
}

module.exports = QueenMarchesa;
