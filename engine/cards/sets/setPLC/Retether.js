"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Retether extends Card {
  constructor(game) {
    super(game, "Retether", "Planar Chaos", "PLC");
  }
}

module.exports = Retether;
