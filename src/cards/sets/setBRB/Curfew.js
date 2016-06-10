"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Curfew extends UnimplementedCard {
  constructor (game) {
    super(game, "Curfew", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Curfew;
