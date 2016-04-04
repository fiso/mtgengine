"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StonehewerGiant extends Card {
  constructor(game) {
    super(game, "Stonehewer Giant", "Modern Masters", "MMA");
  }
}

module.exports = StonehewerGiant;
