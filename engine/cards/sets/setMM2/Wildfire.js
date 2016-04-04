"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Wildfire extends Card {
  constructor(game) {
    super(game, "Wildfire", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Wildfire;
