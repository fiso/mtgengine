"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Intervene extends Card {
  constructor(game) {
    super(game, "Intervene", "Urza's Legacy", "ULG");
  }
}

module.exports = Intervene;
