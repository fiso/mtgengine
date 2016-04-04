"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrownyardExplorers extends Card {
  constructor(game) {
    super(game, "Drownyard Explorers", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DrownyardExplorers;
