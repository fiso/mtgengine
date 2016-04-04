"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sandsower extends Card {
  constructor(game) {
    super(game, "Sandsower", "Modern Masters", "MMA");
  }
}

module.exports = Sandsower;
