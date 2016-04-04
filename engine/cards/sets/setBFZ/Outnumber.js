"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Outnumber extends Card {
  constructor(game) {
    super(game, "Outnumber", "Battle for Zendikar", "BFZ");
  }
}

module.exports = Outnumber;
