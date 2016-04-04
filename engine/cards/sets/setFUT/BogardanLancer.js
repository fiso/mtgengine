"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BogardanLancer extends Card {
  constructor(game) {
    super(game, "Bogardan Lancer", "Future Sight", "FUT");
  }
}

module.exports = BogardanLancer;
