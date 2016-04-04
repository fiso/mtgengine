"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PetrifiedPlating extends Card {
  constructor(game) {
    super(game, "Petrified Plating", "Future Sight", "FUT");
  }
}

module.exports = PetrifiedPlating;
