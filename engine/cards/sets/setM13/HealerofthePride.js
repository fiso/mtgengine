"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HealerofthePride extends Card {
  constructor(game) {
    super(game, "Healer of the Pride", "Magic 2013", "M13");
  }
}

module.exports = HealerofthePride;
