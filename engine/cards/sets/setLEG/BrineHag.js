"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrineHag extends Card {
  constructor(game) {
    super(game, "Brine Hag", "Legends", "LEG");
  }
}

module.exports = BrineHag;
