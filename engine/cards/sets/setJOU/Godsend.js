"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Godsend extends Card {
  constructor(game) {
    super(game, "Godsend", "Journey into Nyx", "JOU");
  }
}

module.exports = Godsend;
