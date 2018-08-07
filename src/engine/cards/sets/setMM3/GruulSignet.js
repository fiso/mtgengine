"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GruulSignet extends UnimplementedCard {
  constructor (game) {
    super(game, "Gruul Signet", "Modern Masters 2017", "MM3");
  }
}

module.exports = GruulSignet;
