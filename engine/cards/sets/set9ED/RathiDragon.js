"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RathiDragon extends Card {
  constructor(game) {
    super(game, "Rathi Dragon", "Ninth Edition", "9ED");
  }
}

module.exports = RathiDragon;
