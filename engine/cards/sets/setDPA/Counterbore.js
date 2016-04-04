"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Counterbore extends Card {
  constructor(game) {
    super(game, "Counterbore", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Counterbore;
