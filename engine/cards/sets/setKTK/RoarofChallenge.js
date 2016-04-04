"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RoarofChallenge extends Card {
  constructor(game) {
    super(game, "Roar of Challenge", "Khans of Tarkir", "KTK");
  }
}

module.exports = RoarofChallenge;
