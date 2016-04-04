"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrollHornCameo extends Card {
  constructor(game) {
    super(game, "Troll-Horn Cameo", "Invasion", "INV");
  }
}

module.exports = TrollHornCameo;
