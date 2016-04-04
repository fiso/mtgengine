"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Maraxus extends Card {
  constructor(game) {
    super(game, "Maraxus", "Vanguard", "VAN");
  }
}

module.exports = Maraxus;
