"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThicketElemental extends Card {
  constructor(game) {
    super(game, "Thicket Elemental", "Invasion", "INV");
  }
}

module.exports = ThicketElemental;
