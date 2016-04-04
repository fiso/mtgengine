"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HanabiBlast extends Card {
  constructor(game) {
    super(game, "Hanabi Blast", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HanabiBlast;
