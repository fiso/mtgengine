"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Detritivore extends Card {
  constructor(game) {
    super(game, "Detritivore", "Planar Chaos", "PLC");
  }
}

module.exports = Detritivore;
