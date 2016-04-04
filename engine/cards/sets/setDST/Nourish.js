"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Nourish extends Card {
  constructor(game) {
    super(game, "Nourish", "Darksteel", "DST");
  }
}

module.exports = Nourish;
