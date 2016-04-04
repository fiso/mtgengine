"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BirdsofParadise extends Card {
  constructor(game) {
    super(game, "Birds of Paradise", "Classic Sixth Edition", "6ED");
  }
}

module.exports = BirdsofParadise;
