"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Parch extends Card {
  constructor(game) {
    super(game, "Parch", "Urza's Legacy", "ULG");
  }
}

module.exports = Parch;
