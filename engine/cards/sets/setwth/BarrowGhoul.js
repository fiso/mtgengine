"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarrowGhoul extends Card {
  constructor(game) {
    super(game, "Barrow Ghoul", "Weatherlight", "WTH");
  }
}

module.exports = BarrowGhoul;
