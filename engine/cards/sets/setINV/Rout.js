"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rout extends Card {
  constructor(game) {
    super(game, "Rout", "Invasion", "INV");
  }
}

module.exports = Rout;
