"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hystrodon extends Card {
  constructor(game) {
    super(game, "Hystrodon", "Onslaught", "ONS");
  }
}

module.exports = Hystrodon;
