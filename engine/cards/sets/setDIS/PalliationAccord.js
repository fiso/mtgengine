"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PalliationAccord extends Card {
  constructor(game) {
    super(game, "Palliation Accord", "Dissension", "DIS");
  }
}

module.exports = PalliationAccord;
