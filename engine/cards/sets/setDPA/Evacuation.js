"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Evacuation extends Card {
  constructor(game) {
    super(game, "Evacuation", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Evacuation;
