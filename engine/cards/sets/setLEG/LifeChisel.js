"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LifeChisel extends Card {
  constructor(game) {
    super(game, "Life Chisel", "Legends", "LEG");
  }
}

module.exports = LifeChisel;
