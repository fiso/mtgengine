"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TeferisVeil extends Card {
  constructor(game) {
    super(game, "Teferi's Veil", "Weatherlight", "WTH");
  }
}

module.exports = TeferisVeil;
