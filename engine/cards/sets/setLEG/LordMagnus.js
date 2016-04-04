"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LordMagnus extends Card {
  constructor(game) {
    super(game, "Lord Magnus", "Legends", "LEG");
  }
}

module.exports = LordMagnus;
