"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Foresee extends Card {
  constructor(game) {
    super(game, "Foresee", "Future Sight", "FUT");
  }
}

module.exports = Foresee;
