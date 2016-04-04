"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GutShot extends Card {
  constructor(game) {
    super(game, "Gut Shot", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = GutShot;
