"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RecklessBrute extends Card {
  constructor(game) {
    super(game, "Reckless Brute", "Magic 2013", "M13");
  }
}

module.exports = RecklessBrute;
