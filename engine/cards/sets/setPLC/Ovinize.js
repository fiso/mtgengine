"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ovinize extends Card {
  constructor(game) {
    super(game, "Ovinize", "Planar Chaos", "PLC");
  }
}

module.exports = Ovinize;
