"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Intimidation extends Card {
  constructor(game) {
    super(game, "Intimidation", "Mercadian Masques", "MMQ");
  }
}

module.exports = Intimidation;
