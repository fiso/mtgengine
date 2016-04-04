"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Night extends Card {
  constructor(game) {
    super(game, "Night", "Apocalypse", "APC");
  }
}

module.exports = Night;
