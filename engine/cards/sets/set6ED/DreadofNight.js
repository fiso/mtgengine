"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreadofNight extends Card {
  constructor(game) {
    super(game, "Dread of Night", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DreadofNight;
