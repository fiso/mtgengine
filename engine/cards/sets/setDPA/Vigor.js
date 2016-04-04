"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vigor extends Card {
  constructor(game) {
    super(game, "Vigor", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Vigor;
