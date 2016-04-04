"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DesperateGambit extends Card {
  constructor(game) {
    super(game, "Desperate Gambit", "Weatherlight", "WTH");
  }
}

module.exports = DesperateGambit;
