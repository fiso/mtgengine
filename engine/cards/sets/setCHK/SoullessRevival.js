"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoullessRevival extends Card {
  constructor(game) {
    super(game, "Soulless Revival", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SoullessRevival;
