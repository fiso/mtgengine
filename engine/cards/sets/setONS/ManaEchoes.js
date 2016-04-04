"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaEchoes extends Card {
  constructor(game) {
    super(game, "Mana Echoes", "Onslaught", "ONS");
  }
}

module.exports = ManaEchoes;
