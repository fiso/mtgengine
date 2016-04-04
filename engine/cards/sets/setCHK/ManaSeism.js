"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaSeism extends Card {
  constructor(game) {
    super(game, "Mana Seism", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ManaSeism;
