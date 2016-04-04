"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BINGO extends UnimplementedCard {
  constructor(game) {
    super(game, "B-I-N-G-O", "Unhinged", "UNH");
  }
}

module.exports = BINGO;
