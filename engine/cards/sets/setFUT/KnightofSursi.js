"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnightofSursi extends Card {
  constructor(game) {
    super(game, "Knight of Sursi", "Future Sight", "FUT");
  }
}

module.exports = KnightofSursi;
