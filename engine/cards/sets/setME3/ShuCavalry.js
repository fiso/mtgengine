"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShuCavalry extends Card {
  constructor(game) {
    super(game, "Shu Cavalry", "Masters Edition III", "ME3");
  }
}

module.exports = ShuCavalry;
