"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mundungu extends Card {
  constructor(game) {
    super(game, "Mundungu", "Visions", "VIS");
  }
}

module.exports = Mundungu;
