"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GibberingDescent extends Card {
  constructor(game) {
    super(game, "Gibbering Descent", "Future Sight", "FUT");
  }
}

module.exports = GibberingDescent;
