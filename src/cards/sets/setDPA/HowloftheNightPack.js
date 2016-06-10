"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HowloftheNightPack extends UnimplementedCard {
  constructor (game) {
    super(game, "Howl of the Night Pack", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = HowloftheNightPack;
