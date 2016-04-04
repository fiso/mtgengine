"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeadlessHorseman extends Card {
  constructor(game) {
    super(game, "Headless Horseman", "Legends", "LEG");
  }
}

module.exports = HeadlessHorseman;
