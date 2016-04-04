"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThornscapeMaster extends Card {
  constructor(game) {
    super(game, "Thornscape Master", "Invasion", "INV");
  }
}

module.exports = ThornscapeMaster;
