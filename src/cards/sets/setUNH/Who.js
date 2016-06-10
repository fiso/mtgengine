"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Who extends UnimplementedCard {
  constructor (game) {
    super(game, "Who", "Unhinged", "UNH");
  }
}

module.exports = Who;
