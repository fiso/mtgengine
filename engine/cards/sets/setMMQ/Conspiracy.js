"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Conspiracy extends Card {
  constructor(game) {
    super(game, "Conspiracy", "Mercadian Masques", "MMQ");
  }
}

module.exports = Conspiracy;
