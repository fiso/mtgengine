"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IndulgentAristocrat extends Card {
  constructor(game) {
    super(game, "Indulgent Aristocrat", "Shadows over Innistrad", "SOI");
  }
}

module.exports = IndulgentAristocrat;
