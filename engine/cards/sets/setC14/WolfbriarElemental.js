"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WolfbriarElemental extends Card {
  constructor(game) {
    super(game, "Wolfbriar Elemental", "Commander 2014", "C14");
  }
}

module.exports = WolfbriarElemental;
