"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HowlingGale extends Card {
  constructor(game) {
    super(game, "Howling Gale", "Odyssey", "ODY");
  }
}

module.exports = HowlingGale;
