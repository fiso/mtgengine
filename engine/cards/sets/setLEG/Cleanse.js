"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cleanse extends Card {
  constructor(game) {
    super(game, "Cleanse", "Legends", "LEG");
  }
}

module.exports = Cleanse;
