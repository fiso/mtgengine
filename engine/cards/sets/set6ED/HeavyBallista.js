"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeavyBallista extends Card {
  constructor(game) {
    super(game, "Heavy Ballista", "Classic Sixth Edition", "6ED");
  }
}

module.exports = HeavyBallista;
