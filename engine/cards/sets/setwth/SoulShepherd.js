"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulShepherd extends Card {
  constructor(game) {
    super(game, "Soul Shepherd", "Weatherlight", "WTH");
  }
}

module.exports = SoulShepherd;
