"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SecondSight extends Card {
  constructor(game) {
    super(game, "Second Sight", "Darksteel", "DST");
  }
}

module.exports = SecondSight;
