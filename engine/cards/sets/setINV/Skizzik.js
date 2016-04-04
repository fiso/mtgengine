"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Skizzik extends Card {
  constructor(game) {
    super(game, "Skizzik", "Invasion", "INV");
  }
}

module.exports = Skizzik;
