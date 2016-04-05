"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Windfall extends UnimplementedCard {
  constructor(game) {
    super(game, "Windfall", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Windfall;
