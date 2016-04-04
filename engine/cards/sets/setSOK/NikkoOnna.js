"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NikkoOnna extends Card {
  constructor(game) {
    super(game, "Nikko-Onna", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = NikkoOnna;
