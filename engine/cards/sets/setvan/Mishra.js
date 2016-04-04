"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mishra extends Card {
  constructor(game) {
    super(game, "Mishra", "Vanguard", "VAN");
  }
}

module.exports = Mishra;
