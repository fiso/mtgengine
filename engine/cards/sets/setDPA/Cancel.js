"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cancel extends Card {
  constructor(game) {
    super(game, "Cancel", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Cancel;
