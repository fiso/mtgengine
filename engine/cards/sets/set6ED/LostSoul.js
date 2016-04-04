"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LostSoul extends Card {
  constructor(game) {
    super(game, "Lost Soul", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LostSoul;
