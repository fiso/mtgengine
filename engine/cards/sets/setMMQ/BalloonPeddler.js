"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalloonPeddler extends Card {
  constructor(game) {
    super(game, "Balloon Peddler", "Mercadian Masques", "MMQ");
  }
}

module.exports = BalloonPeddler;
