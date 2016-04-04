"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Megrim extends Card {
  constructor(game) {
    super(game, "Megrim", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Megrim;
