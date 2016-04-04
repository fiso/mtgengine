"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThievingMagpie extends Card {
  constructor(game) {
    super(game, "Thieving Magpie", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = ThievingMagpie;
