"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FesteringEvil extends Card {
  constructor(game) {
    super(game, "Festering Evil", "Weatherlight", "WTH");
  }
}

module.exports = FesteringEvil;
