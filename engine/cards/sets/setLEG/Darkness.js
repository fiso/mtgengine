"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Darkness extends Card {
  constructor(game) {
    super(game, "Darkness", "Legends", "LEG");
  }
}

module.exports = Darkness;
