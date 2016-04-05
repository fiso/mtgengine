"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pestilence extends UnimplementedCard {
  constructor(game) {
    super(game, "Pestilence", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Pestilence;
