"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Skygames extends Card {
  constructor(game) {
    super(game, "Skygames", "Gatecrash", "GTC");
  }
}

module.exports = Skygames;
