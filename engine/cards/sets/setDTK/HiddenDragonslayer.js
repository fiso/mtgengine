"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HiddenDragonslayer extends Card {
  constructor(game) {
    super(game, "Hidden Dragonslayer", "Dragons of Tarkir", "DTK");
  }
}

module.exports = HiddenDragonslayer;
