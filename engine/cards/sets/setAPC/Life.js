"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Life extends Card {
  constructor(game) {
    super(game, "Life", "Apocalypse", "APC");
  }
}

module.exports = Life;
