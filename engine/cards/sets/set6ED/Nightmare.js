"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Nightmare extends Card {
  constructor(game) {
    super(game, "Nightmare", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Nightmare;
