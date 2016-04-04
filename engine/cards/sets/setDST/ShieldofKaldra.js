"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShieldofKaldra extends Card {
  constructor(game) {
    super(game, "Shield of Kaldra", "Darksteel", "DST");
  }
}

module.exports = ShieldofKaldra;
