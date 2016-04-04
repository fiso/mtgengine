"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Swerve extends Card {
  constructor(game) {
    super(game, "Swerve", "Shards of Alara", "ALA");
  }
}

module.exports = Swerve;
