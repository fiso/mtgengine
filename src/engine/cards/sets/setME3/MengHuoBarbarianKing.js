"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MengHuoBarbarianKing extends UnimplementedCard {
  constructor (game) {
    super(game, "Meng Huo, Barbarian King", "Masters Edition III", "ME3");
  }
}

module.exports = MengHuoBarbarianKing;
