"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Narcomoeba extends Card {
  constructor(game) {
    super(game, "Narcomoeba", "Future Sight", "FUT");
  }
}

module.exports = Narcomoeba;
