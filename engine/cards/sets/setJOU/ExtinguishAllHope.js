"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExtinguishAllHope extends Card {
  constructor(game) {
    super(game, "Extinguish All Hope", "Journey into Nyx", "JOU");
  }
}

module.exports = ExtinguishAllHope;
