"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DevouringStrossus extends Card {
  constructor(game) {
    super(game, "Devouring Strossus", "Invasion", "INV");
  }
}

module.exports = DevouringStrossus;
