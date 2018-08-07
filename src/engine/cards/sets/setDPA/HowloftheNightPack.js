"use strict";
const Constants = require ("../../../Constants");
const HowloftheNightPackBase = require("../setM14/HowloftheNightPack");

class HowloftheNightPack extends HowloftheNightPackBase {
  constructor (game) {
    super(game, "Howl of the Night Pack", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = HowloftheNightPack;
