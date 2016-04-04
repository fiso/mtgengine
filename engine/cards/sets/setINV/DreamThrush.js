"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreamThrush extends Card {
  constructor(game) {
    super(game, "Dream Thrush", "Invasion", "INV");
  }
}

module.exports = DreamThrush;
