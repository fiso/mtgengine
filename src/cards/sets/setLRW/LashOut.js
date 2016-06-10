"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LashOut extends UnimplementedCard {
  constructor (game) {
    super(game, "Lash Out", "Lorwyn", "LRW");
  }
}

module.exports = LashOut;
