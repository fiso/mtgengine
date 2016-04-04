"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Kaboom extends Card {
  constructor(game) {
    super(game, "Kaboom!", "Onslaught", "ONS");
  }
}

module.exports = Kaboom;
