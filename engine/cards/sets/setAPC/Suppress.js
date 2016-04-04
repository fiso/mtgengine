"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Suppress extends Card {
  constructor(game) {
    super(game, "Suppress", "Apocalypse", "APC");
  }
}

module.exports = Suppress;
