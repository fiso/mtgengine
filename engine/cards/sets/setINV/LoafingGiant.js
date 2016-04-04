"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoafingGiant extends Card {
  constructor(game) {
    super(game, "Loafing Giant", "Invasion", "INV");
  }
}

module.exports = LoafingGiant;
