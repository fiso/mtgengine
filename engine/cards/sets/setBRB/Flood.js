"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flood extends UnimplementedCard {
  constructor(game) {
    super(game, "Flood", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Flood;
