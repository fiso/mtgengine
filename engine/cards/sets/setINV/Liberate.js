"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Liberate extends Card {
  constructor(game) {
    super(game, "Liberate", "Invasion", "INV");
  }
}

module.exports = Liberate;
