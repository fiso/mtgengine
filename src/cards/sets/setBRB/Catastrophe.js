"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Catastrophe extends UnimplementedCard {
  constructor (game) {
    super(game, "Catastrophe", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Catastrophe;
