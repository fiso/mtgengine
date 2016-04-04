"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Chronozoa extends Card {
  constructor(game) {
    super(game, "Chronozoa", "Planar Chaos", "PLC");
  }
}

module.exports = Chronozoa;
