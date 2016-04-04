"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mortivore extends Card {
  constructor(game) {
    super(game, "Mortivore", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Mortivore;
