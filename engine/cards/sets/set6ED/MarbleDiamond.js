"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarbleDiamond extends Card {
  constructor(game) {
    super(game, "Marble Diamond", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MarbleDiamond;
