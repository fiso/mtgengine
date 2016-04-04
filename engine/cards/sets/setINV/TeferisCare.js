"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TeferisCare extends Card {
  constructor(game) {
    super(game, "Teferi's Care", "Invasion", "INV");
  }
}

module.exports = TeferisCare;
