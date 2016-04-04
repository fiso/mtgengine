"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnightoftheHokeyPokey extends Card {
  constructor(game) {
    super(game, "Knight of the Hokey Pokey", "Unglued", "UGL");
  }
}

module.exports = KnightoftheHokeyPokey;
