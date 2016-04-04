"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Murasa extends Card {
  constructor(game) {
    super(game, "Murasa", "Planechase", "HOP");
  }
}

module.exports = Murasa;
