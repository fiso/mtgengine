"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PygmyTroll extends UnimplementedCard {
  constructor (game) {
    super(game, "Pygmy Troll", "Exodus", "EXO");
  }
}

module.exports = PygmyTroll;
