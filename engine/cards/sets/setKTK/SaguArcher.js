"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SaguArcher extends Card {
  constructor(game) {
    super(game, "Sagu Archer", "Khans of Tarkir", "KTK");
  }
}

module.exports = SaguArcher;
