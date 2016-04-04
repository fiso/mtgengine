"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrokenFall extends UnimplementedCard {
  constructor(game) {
    super(game, "Broken Fall", "Battle Royale Box Set", "BRB");
  }
}

module.exports = BrokenFall;
