"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HowloftheNightPack extends Card {
  constructor(game) {
    super(game, "Howl of the Night Pack", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = HowloftheNightPack;
