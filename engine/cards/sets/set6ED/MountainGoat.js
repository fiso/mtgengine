"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MountainGoat extends Card {
  constructor(game) {
    super(game, "Mountain Goat", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MountainGoat;
