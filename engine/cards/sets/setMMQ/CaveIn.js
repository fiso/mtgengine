"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CaveIn extends Card {
  constructor(game) {
    super(game, "Cave-In", "Mercadian Masques", "MMQ");
  }
}

module.exports = CaveIn;
