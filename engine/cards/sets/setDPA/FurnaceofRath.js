"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FurnaceofRath extends Card {
  constructor(game) {
    super(game, "Furnace of Rath", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = FurnaceofRath;
