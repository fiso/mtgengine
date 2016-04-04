"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Enrage extends Card {
  constructor(game) {
    super(game, "Enrage", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Enrage;
