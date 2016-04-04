"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hellfire extends Card {
  constructor(game) {
    super(game, "Hellfire", "Legends", "LEG");
  }
}

module.exports = Hellfire;
