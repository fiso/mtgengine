"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rivalry extends Card {
  constructor(game) {
    super(game, "Rivalry", "Urza's Legacy", "ULG");
  }
}

module.exports = Rivalry;
