"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BINGO extends Card {
  constructor(game) {
    super(game, "B-I-N-G-O", "Unhinged", "UNH");
  }
}

module.exports = BINGO;
