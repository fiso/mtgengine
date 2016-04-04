"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sparksmith extends Card {
  constructor(game) {
    super(game, "Sparksmith", "Friday Night Magic", "pFNM");
  }
}

module.exports = Sparksmith;
