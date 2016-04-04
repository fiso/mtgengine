"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Anthroplasm extends Card {
  constructor(game) {
    super(game, "Anthroplasm", "Urza's Legacy", "ULG");
  }
}

module.exports = Anthroplasm;
