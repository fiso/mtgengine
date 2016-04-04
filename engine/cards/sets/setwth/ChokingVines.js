"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChokingVines extends Card {
  constructor(game) {
    super(game, "Choking Vines", "Weatherlight", "WTH");
  }
}

module.exports = ChokingVines;
