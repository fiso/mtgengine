"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShatteredCrypt extends Card {
  constructor(game) {
    super(game, "Shattered Crypt", "Weatherlight", "WTH");
  }
}

module.exports = ShatteredCrypt;
