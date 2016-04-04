"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChasmGuide extends Card {
  constructor(game) {
    super(game, "Chasm Guide", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ChasmGuide;
