"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChroniclerofHeroes extends Card {
  constructor(game) {
    super(game, "Chronicler of Heroes", "Theros", "THS");
  }
}

module.exports = ChroniclerofHeroes;
