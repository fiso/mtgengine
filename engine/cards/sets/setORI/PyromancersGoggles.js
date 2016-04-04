"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PyromancersGoggles extends Card {
  constructor(game) {
    super(game, "Pyromancer's Goggles", "Magic Origins", "ORI");
  }
}

module.exports = PyromancersGoggles;
