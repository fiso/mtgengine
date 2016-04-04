"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dodecapod extends Card {
  constructor(game) {
    super(game, "Dodecapod", "Apocalypse", "APC");
  }
}

module.exports = Dodecapod;
