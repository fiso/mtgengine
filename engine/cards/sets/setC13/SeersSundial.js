"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeersSundial extends Card {
  constructor(game) {
    super(game, "Seer's Sundial", "Commander 2013 Edition", "C13");
  }
}

module.exports = SeersSundial;
