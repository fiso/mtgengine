"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RainofGore extends Card {
  constructor(game) {
    super(game, "Rain of Gore", "Dissension", "DIS");
  }
}

module.exports = RainofGore;
