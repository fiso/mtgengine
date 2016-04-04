"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ViciousKavu extends Card {
  constructor(game) {
    super(game, "Vicious Kavu", "Invasion", "INV");
  }
}

module.exports = ViciousKavu;
