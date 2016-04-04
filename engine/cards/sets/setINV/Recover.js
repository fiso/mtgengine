"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Recover extends Card {
  constructor(game) {
    super(game, "Recover", "Invasion", "INV");
  }
}

module.exports = Recover;
