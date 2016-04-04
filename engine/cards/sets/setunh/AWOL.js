"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AWOL extends Card {
  constructor(game) {
    super(game, "AWOL", "Unhinged", "UNH");
  }
}

module.exports = AWOL;
