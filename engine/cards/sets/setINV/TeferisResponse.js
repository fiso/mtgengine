"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TeferisResponse extends Card {
  constructor(game) {
    super(game, "Teferi's Response", "Invasion", "INV");
  }
}

module.exports = TeferisResponse;
