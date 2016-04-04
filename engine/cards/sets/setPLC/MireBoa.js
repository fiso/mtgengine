"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MireBoa extends Card {
  constructor(game) {
    super(game, "Mire Boa", "Planar Chaos", "PLC");
  }
}

module.exports = MireBoa;
