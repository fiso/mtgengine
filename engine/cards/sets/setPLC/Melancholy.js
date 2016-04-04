"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Melancholy extends Card {
  constructor(game) {
    super(game, "Melancholy", "Planar Chaos", "PLC");
  }
}

module.exports = Melancholy;
