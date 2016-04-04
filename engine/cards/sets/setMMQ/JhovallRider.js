"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JhovallRider extends Card {
  constructor(game) {
    super(game, "Jhovall Rider", "Mercadian Masques", "MMQ");
  }
}

module.exports = JhovallRider;
