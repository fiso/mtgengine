"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Nekrataal extends UnimplementedCard {
  constructor (game) {
    super(game, "Nekrataal", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Nekrataal;
