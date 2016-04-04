"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Phantasmagorian extends Card {
  constructor(game) {
    super(game, "Phantasmagorian", "Planar Chaos", "PLC");
  }
}

module.exports = Phantasmagorian;
