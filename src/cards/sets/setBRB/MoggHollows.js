"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoggHollows extends UnimplementedCard {
  constructor(game) {
    super(game, "Mogg Hollows", "Battle Royale Box Set", "BRB");
  }
}

module.exports = MoggHollows;
