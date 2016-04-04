"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrimAffliction extends Card {
  constructor(game) {
    super(game, "Grim Affliction", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = GrimAffliction;
