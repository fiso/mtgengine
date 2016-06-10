"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightofSursi extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight of Sursi", "Future Sight", "FUT");
  }
}

module.exports = KnightofSursi;
