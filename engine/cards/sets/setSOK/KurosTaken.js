"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KurosTaken extends Card {
  constructor(game) {
    super(game, "Kuro's Taken", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KurosTaken;
