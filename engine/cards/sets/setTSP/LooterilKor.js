"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LooterilKor extends Card {
  constructor(game) {
    super(game, "Looter il-Kor", "Time Spiral", "TSP");
  }
}

module.exports = LooterilKor;
