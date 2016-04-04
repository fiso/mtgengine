"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VenarianGold extends Card {
  constructor(game) {
    super(game, "Venarian Gold", "Legends", "LEG");
  }
}

module.exports = VenarianGold;
