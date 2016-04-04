"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThinkTank extends Card {
  constructor(game) {
    super(game, "Think Tank", "Odyssey", "ODY");
  }
}

module.exports = ThinkTank;
