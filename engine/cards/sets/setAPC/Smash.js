"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Smash extends Card {
  constructor(game) {
    super(game, "Smash", "Apocalypse", "APC");
  }
}

module.exports = Smash;
