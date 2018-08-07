"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LadiesKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Ladies' Knight", "Unhinged", "UNH");
  }
}

module.exports = LadiesKnight;
