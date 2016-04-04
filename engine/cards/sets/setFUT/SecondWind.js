"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SecondWind extends Card {
  constructor(game) {
    super(game, "Second Wind", "Future Sight", "FUT");
  }
}

module.exports = SecondWind;
