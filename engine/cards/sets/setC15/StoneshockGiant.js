"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoneshockGiant extends Card {
  constructor(game) {
    super(game, "Stoneshock Giant", "Commander 2015", "C15");
  }
}

module.exports = StoneshockGiant;
