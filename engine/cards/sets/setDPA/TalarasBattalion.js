"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TalarasBattalion extends Card {
  constructor(game) {
    super(game, "Talara's Battalion", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = TalarasBattalion;
