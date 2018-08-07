"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarchesatheBlackRose extends UnimplementedCard {
  constructor (game) {
    super(game, "Marchesa, the Black Rose", "Commander 2017", "C17");
  }
}

module.exports = MarchesatheBlackRose;
