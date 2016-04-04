"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AnkleShanker extends Card {
  constructor(game) {
    super(game, "Ankle Shanker", "Khans of Tarkir", "KTK");
  }
}

module.exports = AnkleShanker;
