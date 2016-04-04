"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathWish extends Card {
  constructor(game) {
    super(game, "Death Wish", "Judgment", "JUD");
  }
}

module.exports = DeathWish;
