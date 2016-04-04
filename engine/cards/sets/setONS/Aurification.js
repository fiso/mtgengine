"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Aurification extends Card {
  constructor(game) {
    super(game, "Aurification", "Onslaught", "ONS");
  }
}

module.exports = Aurification;
