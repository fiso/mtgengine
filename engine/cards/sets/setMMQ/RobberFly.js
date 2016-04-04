"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RobberFly extends Card {
  constructor(game) {
    super(game, "Robber Fly", "Mercadian Masques", "MMQ");
  }
}

module.exports = RobberFly;
